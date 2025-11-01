import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import { FcGoogle } from 'react-icons/fc';
import loginLottie from "../../assets/login.json"
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = use(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Welcome Back!",
          text: `Hello, ${result.user.displayName || result.user.email}!`,
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
        Swal.fire({
          title: "Sign-In Failed!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#d33",
        });
      })
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
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <div className="card-body">
              {/* Logo */}
              <div className="mx-auto mb-6">
                <Link to="/" className="w-12 h-12 rounded-full flex items-center justify-center">
                  {/* Use React Icon for logo or text */}
                  <img src="/src/assets/logo.png" className='w-36' alt="" />
                </Link>
              </div>

              <h1 className="text-3xl font-bold text-center mb-2">Login</h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="input input-bordered w-full pr-10"
                      {...register("email", { required: "Email is required" })}
                    />
                  </div>
                  {errors.email && <span className="text-error text-sm mt-1">{errors.email.message}</span>}
                </div>

                {/* Password Input */}
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className="input input-bordered w-full pr-10"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <span className="text-error text-sm mt-1">{errors.password.message}</span>}
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary w-full">Login</button>
                </div>
              </form>

              {/* Google Login Button */}
              <div className="divider">Or continue with</div>


              {/* Sign Up Link */}
              <div className="text-center mt-4">
                <span className="text-sm">Don't have an account? </span>
                <Link to="/signup" className="text-primary link">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;