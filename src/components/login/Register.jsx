
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authActions } from '../../store/authSlice'
import "./login.css"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        dispatch(authActions.login());
        navigate('/my-account')

        if (password !== confirmPassword) {
            setErrors(["Password and confirm password must match"]);
            setIsSubmitting(false);
            return;
        }

        if (email.length < 5) {
            setErrors(["Email must be at least 5 characters long"]);
            setIsSubmitting(false);
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsSubmitting(false);
    };

    return (
        <div className='register p-4 h-[100vh] flex flex-col justify-center items-center '>
            <form onSubmit={handleRegisterSubmit} className="form_register bg-white p-4 text-zinc-500 w-[600px] flex flex-col gap-y-2 ">
                <h2 className='text-3xl font-medium text-center text-[#cc9966] py-2'>Register</h2>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((error) => (
                            <li
                                key={error}
                                className="bg-red-100 text-red-500 px-4 py-2 rounded"
                            >
                                {error}
                            </li>
                        ))}
                    </ul>
                )}
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    minLength={5} 
                    placeholder="Email"
                    className="px-4 py-2 rounded bg-gray-100"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    placeholder="Password"
                    className="px-4 py-2 rounded bg-gray-100"
                />
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    required
                    placeholder="Confirm password"
                    className="px-4 py-2 rounded bg-gray-100"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-slate-400 text-white text-lg mt-3 disabled:bg-gray-500 py-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Register;

