import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase.init';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {

    const { setUser, createUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();


    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;

        console.log(name, email, password);


        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");
            return;
        } else {
            setNameError("");
        }


        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        } else if (!uppercaseRegex.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter.");
            return;
        } else if (!lowercaseRegex.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter.");
            return;
        } else {
            setPasswordError("");
        }


        // Firebase auth
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        localStorage.setItem('currentUserId', user.uid);
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                        localStorage.setItem('currentUserId', user.uid);
                    });

                setUser(user);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const handleGoogleSignUp = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                localStorage.setItem('currentUserId', user.uid);
                navigate('/');
                // console.log('User signed up with Google:', user);
            })
            .catch((error) => {
                alert(error.message);
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
                            <h1 className='text-2xl text-center mb-5'>Register Your Account</h1>
                            <hr className='mb-8' />
                            <form onSubmit={handleRegister}>
                                <label className="label text-lg">Name</label>
                                <input type="text" name='name' className="input input-bordered w-full" placeholder="Name" required />

                                {
                                    nameError && <p className='text-xs text-error'>{nameError}</p>
                                }

                                <label className="label text-lg">Photo URL</label>
                                <input type="text" name='photo' className="input input-bordered w-full" placeholder="Photo URL" required />

                                <label className="label text-lg">Email</label>
                                <input type="email" name='email' className="input input-bordered w-full" placeholder="Email" required />

                                <label className="label text-lg">Password</label>
                                <input type="password" name='password' className="input input-bordered w-full" placeholder="Password" required />
                                {
                                    passwordError && <p className='text-xs text-error mt-3'>{passwordError}</p>
                                }


                                <button type='submit' className="btn btn-neutral mt-4 w-full mb-4">Register</button>
                            </form>

                            <div className="divider">OR</div>

                            <button onClick={handleGoogleSignUp} className="btn bg-white text-black border-[#e5e5e5] mb-4 w-full">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='mr-2'>
                                    <g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g>
                                </svg>
                                Sign Up with Google
                            </button>

                            <p className='text-center text-sm'>
                                Already have an account? <Link to="/Login" className='text-red-500 link-hover'>Login</Link>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;