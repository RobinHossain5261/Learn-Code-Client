import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { logIn, googleLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handaleGoogleSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }


    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handaleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);

            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handaleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">I have no account?</Link>
                                </label>
                            </div>
                            <p className='text-red-400	'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Login</button>
                                <button onClick={handaleGoogleSignIn} className="btn btn-success mt-2">Login With Google</button>
                                <button className="btn btn-dark mt-2">Login With Github</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;