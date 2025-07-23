import React, { useState } from "react";
import { loginUser, registerUser } from "../data/userAPI";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = isLogin
        ? await loginUser(form)
        : await registerUser(form);

      const { user, token } = res.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      setForm({ name: "", email: "", password: "" });
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-milk text-dark-brown px-4">
      <div className="bg-milk p-8 lg:p-[2.5vw] rounded-xl shadow-xl w-full lg:w-1/3">
        <h2 className="text-2xl text-primary lg:text-[2vw] font-bold mb-6 lg:mb-[2vw] text-center">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {error && (
          <p className="mb-4 lg:mb-[1.4vw] text-center text-red-600 font-semibold">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 lg:space-y-[1.5vw] lg:text-[1.2vw]"
        >
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border-primary outline-primary lg:p-[.7vw] border rounded"
              required
              disabled={loading}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border-primary outline-primary lg:p-[.7vw] border rounded"
            required
            disabled={loading}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border-primary outline-primary lg:p-[.7vw] border rounded"
            required
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 lg:py-[.7vw] rounded text-milk ${
              loading
                ? "bg-primary/50 cursor-not-allowed"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {loading
              ? isLogin
                ? "Logging in..."
                : "Signing up..."
              : isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-dark-brown mt-4 lg:text-[.9vw] lg:mt-[1.3vw] text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setForm({ name: "", email: "", password: "" });
            }}
            className="text-primary cursor-pointer underline"
            disabled={loading}
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
