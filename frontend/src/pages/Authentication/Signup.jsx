import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Signup = () => {
  const { signup, signin, googleLogin, loading } = useAuth();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      if (isLogin) {
        await signin(email, password);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        await signup(name, email, password);

        Swal.fire({
          icon: "success",
          title: "Account Created",
          text: "Your account has been created successfully.",
          timer: 1800,
          showConfirmButton: false,
        });
      }

      navigate("/");
    } catch (err) {
      // 🔴 Firebase error handling
      let message = "Something went wrong. Please try again.";

      if (err.code === "auth/email-already-in-use") {
        message = "This email is already registered. Try logging in instead.";
      } else if (err.code === "auth/user-not-found") {
        message = "No account found with this email.";
      } else if (err.code === "auth/wrong-password") {
        message = "Incorrect password. Please try again.";
      } else if (err.code === "auth/invalid-email") {
        message = "Invalid email address.";
      } else if (err.code === "auth/weak-password") {
        message = "Password should be at least 6 characters.";
      }

      Swal.fire({
        icon: "error",
        title: "Authentication Failed",
        text: message,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Signed in with Google.",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: err.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 my-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 w-14 h-14 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl">
            🚚
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {isLogin ? "Login to continue" : "Sign up to get started"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-orange-400 text-gray-600"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-orange-400 text-gray-600"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 focus:ring-2 focus:ring-orange-400 text-gray-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-9 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 disabled:opacity-60"
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 text-gray-600 hover:bg-gray-50"
        >
          <FcGoogle />
          Continue with Google
        </button>

        {/* Toggle */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-orange-500 font-semibold"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
