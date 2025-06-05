import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut, resetPassword } from "../api/authAPI";

const ForgetPasswordForm: React.FC = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    // Check for empty fields
    if (!email) {
      toast.error("Please Enter your Email.");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await resetPassword(email);
      navigate("/login");
      toast.success("Check Your Email to get New Password");
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
    <>
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

        <button
          type="submit"
          className="bg-gray-950 text-white border border-gray-950 w-full my-4 px-4 py-3 rounded"
          disabled={loading}>
          Reset Password
        </button>
      </form>
    </>
  );
};

export default ForgetPasswordForm;
