import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAuthStore } from "../zustand/authStore";
import { registerSchema } from "../validation/authSchemas";

export default function RegisterModal() {
  const [success, setSuccess] = useState(false);
  const { register: registerUser, loading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { subscribe: false },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const subscribe = watch("subscribe");

  const onSubmit = async (formData) => {
    clearError();
    const result = await registerUser(
      formData.email,
      formData.password,
      `${formData.firstName} ${formData.lastName}`
    );
    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="bg-[#1f2d3d] text-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">

        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-sm z-10"
        >
          ✕
        </button>

        <div className="p-8">
          {success ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-xl font-bold mb-2">Account Created!</h2>
              <p className="text-gray-300 text-sm">Check your email to confirm your account.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>

              {error && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-300 text-sm px-4 py-3 rounded-xl mb-4">
                   {error}
                </div>
              )}

              <h3 className="text-lg font-bold mb-5">Your Personal Details</h3>

              <div className="flex flex-col gap-4 mb-6">
                <div className="grid grid-cols-3 items-start gap-3">
                  <label className="text-sm text-gray-300 pt-2.5">First Name</label>
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName")}
                      className={`w-full bg-[#2a3a4d] border rounded-lg px-4 py-2.5 text-sm outline-none text-white placeholder-gray-500 ${
                        errors.firstName ? "border-red-500" : "border-gray-600 focus:border-orange-400"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 items-start gap-3">
                  <label className="text-sm text-gray-300 pt-2.5">Last Name</label>
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName")}
                      className={`w-full bg-[#2a3a4d] border rounded-lg px-4 py-2.5 text-sm outline-none text-white placeholder-gray-500 ${
                        errors.lastName ? "border-red-500" : "border-gray-600 focus:border-orange-400"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 items-start gap-3">
                  <label className="text-sm text-gray-300 pt-2.5">E-Mail <span className="text-red-400">*</span></label>
                  <div className="col-span-2">
                    <input
                      type="email"
                      placeholder="E-Mail"
                      {...register("email")}
                      className={`w-full bg-[#2a3a4d] border rounded-lg px-4 py-2.5 text-sm outline-none text-white placeholder-gray-500 ${
                        errors.email ? "border-red-500" : "border-gray-600 focus:border-orange-400"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 items-start gap-3">
                  <label className="text-sm text-gray-300 pt-2.5">Telephone</label>
                  <div className="col-span-2">
                    <input
                      type="tel"
                      placeholder="Telephone"
                      {...register("telephone")}
                      className={`w-full bg-[#2a3a4d] border rounded-lg px-4 py-2.5 text-sm outline-none text-white placeholder-gray-500 ${
                        errors.telephone ? "border-red-500" : "border-gray-600 focus:border-orange-400"
                      }`}
                    />
                    {errors.telephone && (
                      <p className="text-red-400 text-xs mt-1">{errors.telephone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-5">Your Password</h3>

              <div className="flex flex-col gap-4 mb-6">
                <div className="grid grid-cols-3 items-start gap-3">
                  <label className="text-sm text-gray-300 pt-2.5">Password <span className="text-red-400">*</span></label>
                  <div className="col-span-2">
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                      className={`w-full bg-[#2a3a4d] border rounded-lg px-4 py-2.5 text-sm outline-none text-white placeholder-gray-500 ${
                        errors.password ? "border-red-500" : "border-gray-600 focus:border-orange-400"
                      }`}
                    />
                    {errors.password && (
                      <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 items-start gap-3">
                  <label className="text-sm text-gray-300 pt-2.5">Password Confirm <span className="text-red-400">*</span></label>
                  <div className="col-span-2">
                    <input
                      type="password"
                      placeholder="Password Confirm"
                      {...register("confirm")}
                      className={`w-full bg-[#2a3a4d] border rounded-lg px-4 py-2.5 text-sm outline-none text-white placeholder-gray-500 ${
                        errors.confirm ? "border-red-500" : "border-gray-600 focus:border-orange-400"
                      }`}
                    />
                    {errors.confirm && (
                      <p className="text-red-400 text-xs mt-1">{errors.confirm.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <div className="grid grid-cols-3 items-center gap-3 mb-8">
                <label className="text-sm text-gray-300">Subscribe</label>
                <div className="col-span-2 flex items-center gap-6">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      checked={subscribe === true}
                      onChange={() => register("subscribe").onChange({ target: { name: "subscribe", value: true } })}
                      className="accent-orange-500"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      checked={subscribe !== true}
                      onChange={() => register("subscribe").onChange({ target: { name: "subscribe", value: false } })}
                      className="accent-orange-500"
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="px-6 py-2.5 border border-gray-500 rounded-lg text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-2.5 bg-[#e8b26c] hover:bg-amber-400 text-slate-800 font-semibold rounded-lg text-sm transition-colors disabled:opacity-60"
                >
                  {loading ? "Creating..." : "Continue"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}