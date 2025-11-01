import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import { FcGoogle } from 'react-icons/fc';
import loginLottie from "../../assets/login.json"
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';


const Signup = () => {
    const { createUser, updateUserProfile } = use(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const { email, password, firstName, lastName } = data;
        const fullName = `${firstName} ${lastName}`;

        createUser(email, password)
            .then((result) => {
                console.log("User created:", result.user);
                // Update profile (name)
                return updateUserProfile(fullName);
            })
            .then(() => {
                // Show success SweetAlert after profile update
                Swal.fire({
                    title: "Account Created!",
                    text: `Welcome, ${fullName}!`,
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                });
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000);
            })
            .catch((error) => {
                console.error("Error:", error.message);
                Swal.fire({
                    title: "Registration Failed!",
                    text: error.message,
                    icon: "error",
                    confirmButtonColor: "#d33",
                });
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
                    {/* Right Side: Illustration */}
                    <div className="text-center md:ml-20 lg:text-left md:pl-8">
                        {/* Lottie Animation */}
                        <Lottie
                            animationData={loginLottie}
                            loop={true}
                            className="md:w-[80%] md:h-[80%] w-96 h-96  lg:mx-0"
                        />
                    </div>

                    {/* Left Side: Form */}
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
                        <div className="card-body">
                            {/* Logo */}
                            <div className="mx-auto mb-6">
                                <Link to="/" className="w-12 h-12 rounded-full flex items-center justify-center">
                                    {/* Use React Icon for logo or text */}
                                    <img src="/src/assets/logo.png" className='w-36' alt="" />
                                </Link>
                            </div>

                            <h1 className="text-3xl font-bold text-center mb-2">Create An Account</h1>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                                {/* First Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">First Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className={`input input-bordered w-full ${errors.firstName ? 'input-error' : ''}`}
                                        {...register("firstName", {
                                            required: "First name is required",
                                        })}
                                    />
                                    {errors.firstName && (
                                        <p className="text-error text-sm mt-1">{errors.firstName.message}</p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className={`input input-bordered w-full ${errors.lastName ? 'input-error' : ''}`}
                                        {...register("lastName", {
                                            required: "Last name is required",
                                        })}
                                    />
                                    {errors.lastName && (
                                        <p className="text-error text-sm mt-1">{errors.lastName.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-error text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            }
                                        })}
                                    />
                                    {errors.password && (
                                        <p className="text-error text-sm mt-1">{errors.password.message}</p>
                                    )}
                                </div>

                                {/* Terms Checkbox */}
                                <div className="form-control">
                                    <label className="label cursor-pointer justify-start gap-3">
                                        <input
                                            type="checkbox"
                                            className={`checkbox checkbox-primary ${errors.agree ? 'checkbox-error' : ''}`}
                                            {...register("agree", {
                                                required: "You must agree to the terms"
                                            })}
                                        />
                                        <span className="label-text">
                                            Yes, I agree with the{" "}
                                            <a href="/privacy" className="link link-primary">Privacy Policy</a>
                                        </span>
                                    </label>
                                    {errors.agree && (
                                        <p className="text-error text-sm mt-1 -mb-2">{errors.agree.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full text-white"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </form>

                            {/* Google Login Button */}
                            <div className="divider">Or continue with</div>


                            {/* Sign Up Link */}
                            <div className="text-center mt-4">
                                <span className="text-sm">Already have an account? </span>
                                <Link to="/login" className="text-primary link">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;