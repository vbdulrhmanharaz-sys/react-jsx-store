import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../zustand/authStore";
import { loginSchema } from "../validation/authSchemas";
import { useState } from "react";
import RegisterModal from "../Components/RegisterModal";

export default function Login() {
  const [showRegister, setShowRegister] = useState(false);
  const { login, loading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (formData) => {
    clearError();
    const result = await login(formData.email, formData.password);
    if (result.success) navigate("/");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-350 mx-auto px-4">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-orange-500">🏠 Home</Link>
          <span>/</span>
          <span>Account</span>
          <span>/</span>
          <span className="text-slate-700 font-medium">Login</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-2">Account Login</h1>
        <div className="w-12 h-1 bg-orange-500 rounded mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Returning Customer */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-6">Returning Customer</h2>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-4">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-3 items-start">
                <label className="text-sm text-slate-600 pt-2.5">E-Mail Address</label>
                <div className="col-span-2">
                  <input
                    type="email"
                    placeholder="E-Mail Address"
                    {...register("email")}
                    className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none bg-white ${
                      errors.email ? "border-red-400" : "border-gray-200 focus:border-orange-400"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 items-start">
                <label className="text-sm text-slate-600 pt-2.5">Password</label>
                <div className="col-span-2">
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none bg-white ${
                      errors.password ? "border-red-400" : "border-gray-200 focus:border-orange-400"
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3">
                <div />
                <div className="col-span-2">
                  <Link to="/forgot-password" className="text-orange-500 text-sm hover:underline">
                    Forgotten Password
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3">
                <div />
                <div className="col-span-2">
                  <button onClick={() => navigate("/home")} type="submit" disabled={loading} className="w-full bg-[#e8b26c] hover:bg-amber-400 text-slate-800 font-semibold py-3 rounded-lg transition-colors disabled:opacity-60">
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* New Customer */}
          <div className="lg:border-l border-gray-200 lg:pl-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">New Customer</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
            </p>
            <button
              onClick={() => setShowRegister(true)}
              className="w-full bg-[#e8b26c] hover:bg-amber-400 text-slate-800 font-semibold py-3 rounded-lg transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </div>
  );
}