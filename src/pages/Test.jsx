import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Test() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // هنا تحط منطق التسجيل باستخدام Firebase أو أي API
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white shadow-2xl rounded-3xl max-w-md w-full p-8 sm:p-10">
        <h2 className="text-4xl font-poppins font-bold text-darkBlue text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-3">
          Sign up to start your journey
        </p>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-gray-700 font-semibold  mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-2xl border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-all duration-300"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-all duration-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-white font-poppins 
            font-bold py-3 rounded-2xl shadow-lg hover:bg-darkBlue
             transition duration-300 mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-2">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange font-semibold hover:text-darkBlue transition duration-300"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
//hedratalat9T$
