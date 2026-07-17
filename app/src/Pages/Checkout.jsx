import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { checkoutSchema } from "../validation/checkoutSchema";

function Field({ label, name, type = "text", placeholder, full, register, errors }) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <label className="text-sm text-slate-600 block mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none bg-white ${
          errors[name] ? "border-red-400" : "border-gray-200 focus:border-orange-400"
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}

export default function Checkout() {
  const { cart, totalItems } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(checkoutSchema) });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const onSubmit = async (data) => {
    // TODO: ربط الدفع الحقيقي هنا (Stripe أو غيره)
    console.log("Order submitted:", data, cart);
    await new Promise((r) => setTimeout(r, 1000));
    navigate("/");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-250 mx-auto px-4">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Checkout</h1>
        <div className="w-12 h-1 bg-orange-500 rounded mb-8" />

        <p className="text-gray-500 mb-6">{totalItems} item(s) — Total: ${total.toFixed(2)}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl border border-gray-100 p-8">

          <h2 className="text-lg font-bold text-slate-800 mb-4">Shipping Information</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Field label="First Name" name="firstName" placeholder="First Name" register={register} errors={errors} />
            <Field label="Last Name" name="lastName" placeholder="Last Name" register={register} errors={errors} />
            <Field label="Email" name="email" type="email" placeholder="Email" register={register} errors={errors} />
            <Field label="Phone" name="phone" placeholder="Phone" register={register} errors={errors} />
            <Field label="Address" name="address" placeholder="Address" full register={register} errors={errors} />
            <Field label="City" name="city" placeholder="City" register={register} errors={errors} />
            <Field label="Postal Code" name="postalCode" placeholder="Postal Code" register={register} errors={errors} />
            <Field label="Country" name="country" placeholder="Country" full register={register} errors={errors} />
          </div>

          <h2 className="text-lg font-bold text-slate-800 mb-4">Payment Details</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Field label="Name on Card" name="cardName" placeholder="Name on Card" full register={register} errors={errors} />
            <Field label="Card Number" name="cardNumber" placeholder="1234567812345678" register={register} errors={errors} />
            <Field label="Expiry (MM/YY)" name="cardExpiry" placeholder="MM/YY" register={register} errors={errors} />
            <Field label="CVC" name="cardCvc" placeholder="123" register={register} errors={errors} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#e8b26c] hover:bg-amber-400 text-slate-800 font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
          >
            {isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  );
}
