"use client"
import Link from "next/link";
import logInJson from "@/assets/log.json";
import Lottie from "lottie-react";

const RegisterPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left">
          <Lottie animationData={logInJson} className="lg:w-[50%] mx-auto" />
        </div>
        <div className="card shrink-0 w-full mx-auto max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password..."
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="text-center">
            <p className="pb-3">Or Log In with</p>
            <div className="pb-10 ">
              <button className="flex hover:bg-sky-200 justify-center items-center gap-2 p-2 w-3/4 mx-auto border-2 border-primary rounded-full">
                Google
                <p className="text-xl">Google</p>
              </button>
              <div className="pt-3">
                <p>
                  Already have an account? Please
                  <Link
                    href={"/login"}
                    className="underline font-bold text-primary"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default RegisterPage;