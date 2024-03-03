import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { resetPasswordEmail } from "../authentication/auth";

const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [resetStatus, setResetStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPasswordEmail(email);
      setResetStatus("success");
      navigate("/login");
    } catch (error) {
      console.error("Password reset error:", error.message);
      setResetStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Send password reset email
          </button>
        </form>

        {resetStatus === "success" && (
          <p className="text-green-600 mt-2">
            Password reset email sent successfully!
          </p>
        )}
        {resetStatus === "error" && (
          <p className="text-red-500 mt-2">
            Error sending password reset email. Please try again.
          </p>
        )}

        <p className="mt-4">
          Don't have an account?{" "}
          <NavLink to="/login" className="text-blue-500">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Reset;
