import React, { useEffect, useRef, useState } from "react";
import { BsEye } from "react-icons/bs";
import { logOut, register } from "../api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPassConfirmation, setShowPassConfirmation] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const passconfirmRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    const confirmPassword = passconfirmRef.current?.value;
    // Check for empty fields
    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await register(email, password);
      navigate("/dashboard");
      toast.success("You are Successfully Sign Up");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  const handleShowPassConfirmation = () => {
    setShowPassConfirmation((prev) => !prev);
  };

  useEffect(() => {
      const handleLogin = async () => {
        if (
          window.location.pathname === "/" ||
          window.location.pathname === "/login" ||
          window.location.pathname === "/sign-up" ||
          window.location.pathname === "/forget-pass"
        ) {
          await logOut();
        }
      };
      handleLogin();
    }, []);
  if (error) {
    return <p className="text-red-400">{error}</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Email">
        <span className="text-lg font-medium text-gray-700 mb-2 block">
          {" "}
          Email{" "}
        </span>
        <input
          type="email"
          id="Email"
          className="mt-0.5 mb-2 w-full rounded border-gray-300 shadow-sm sm:text-sm px-4 py-3 text-lg"
          ref={emailRef}
        />
      </label>
      <label htmlFor="Password">
        <span className="text-lg font-medium text-gray-700 mb-2 block">
          {" "}
          Password{" "}
        </span>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            id="Password"
            className="mt-0.5 mb-2 w-full rounded border-gray-300 shadow-sm sm:text-sm px-4 py-3 text-lg"
            ref={passRef}
          />
          <BsEye
            className="absolute translate-y-1/2 inset-y-0 right-4 text-gray-700"
            onClick={handleShowPass}
            size={25}
          />
        </div>
      </label>
      <label htmlFor="Password-confirmation">
        <span className="text-lg font-medium text-gray-700 mb-2 block">
          {" "}
          Password Confirmation{" "}
        </span>
        <div className="relative">
          <input
            type={showPassConfirmation ? "text" : "password"}
            id="Password-confirmation"
            className="mt-0.5 mb-2 w-full rounded border-gray-300 shadow-sm sm:text-sm px-4 py-3 text-lg"
            ref={passconfirmRef}
          />
          <BsEye
            className="absolute translate-y-1/2 inset-y-0 right-4 text-gray-700"
            onClick={handleShowPassConfirmation}
            size={25}
          />
        </div>
      </label>

      <button
        type="submit"
        className="bg-gray-950 text-white border border-gray-950 w-full my-4 px-4 py-3 rounded cursor-pointer"
        disabled={loading}>
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
