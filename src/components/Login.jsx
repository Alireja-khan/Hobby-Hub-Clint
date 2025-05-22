import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';
import { auth } from '../services/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState("");
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn, setUser } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                navigate(location.state || "/");
                Swal.fire({
                    icon: "success",
                    title: "You are successfully signed in",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                setError("Google Sign-In failed.");
                toast.error("Google Sign-In failed.");
            });
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('currentUserId', user.email);
                toast.success('Successfully logged in');
                navigate(location.state || "/");
                Swal.fire({
                    icon: "success",
                    title: "You are successfully signed in",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
                if (errorCode === 'auth/wrong-password') {
                    toast.error('Incorrect password. Please try again.');
                } else if (errorCode === 'auth/user-not-found') {
                    toast.error('User not found. Please register first.');
                } else {
                    toast.error('Login failed. Please try again.');
                }
            });
    };

    return (
        <div>
            {/* Top Navbar */}
            <div className="bg-white shadow-md px-4 py-3 sticky top-0 z-50 flex justify-center">
                <Link to="/" className="text-2xl font-bold hover:bg-gray-100 p-2 rounded-md">HobbyHub</Link>
            </div>

            {/* Login Form Section */}
            <div className="bg-base-200 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md bg-base-100 p-8 rounded-lg shadow-xl">
                    <h1 className="text-2xl font-bold text-center mb-6">Login to Your Account</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="label text-sm font-semibold">Email</label>
                            <input type="email" name="email" required className="input input-bordered w-full" placeholder="Enter your email" />
                        </div>

                        <div>
                            <label className="label text-sm font-semibold">Password</label>
                            <input type="password" name="password" required className="input input-bordered w-full" placeholder="Enter your password" />
                        </div>

                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                        <button type="submit" className="btn btn-neutral w-full">Login</button>
                    </form>

                    <div className="divider">OR</div>

                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="btn bg-white text-black border border-gray-300 w-full flex items-center justify-center"
                    >
                        <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" className="mr-2" />
                        Login with Google
                    </button>

                    <p className="mt-4 text-center text-sm">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-red-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
