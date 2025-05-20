import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider'; // Make sure this path is correct
import { auth } from '../services/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext); // ✅ Corrected hook

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                navigate(location.state || "/");
            })
            .catch(error => {
                setError(error.code);
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
            <div className="navbar bg-white shadow-md px-4 sticky top-0 z-50 flex justify-center">
                <Link to="/" className="text-2xl font-bold hover:bg-gray-100 p-3 rounded-lg">HobbyHub</Link>
            </div>

            <div className="hero bg-base-200 min-h-screen pb-40">
                <div className="hero-content max-w-xl w-full">
                    <div className="card bg-base-100 w-full shadow-2xl p-6">
                        <div className="card-body">
                            <h1 className="text-2xl text-center mb-5">Login Your Account</h1>
                            <hr className="mb-8" />
                            <form onSubmit={handleLogin}>
                                <label className="label text-xl">Email</label>
                                <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" required />

                                <label className="label text-xl">Password</label>
                                <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" required />

                                <div><a className="link link-hover text-sm">Forgot password?</a></div>

                                {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

                                <button type="submit" className="btn btn-neutral mt-4 w-full mb-4">Login</button>

                                <div className="divider">OR</div>

                                <button
                                    onClick={handleGoogleSignIn}
                                    className="btn bg-white text-black border-[#e5e5e5] w-full"
                                >
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2">
                                        <g>
                                            <path d="m0 0H512V512H0" fill="#fff"></path>
                                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                        </g>
                                    </svg>
                                    Login with Google
                                </button>

                            </form>

                            <h1 className="text-center text-sm mt-4">
                                Don't Have An Account?{" "}
                                <Link to="/register" className="text-red-500 link-hover">Register</Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
