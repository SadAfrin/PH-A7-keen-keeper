import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
      <div className="text-center px-6">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg opacity-90">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition duration-300"
          >
            Go Back Home
          </button>
        </div>

        {/* Extra design element */}
        <div className="mt-10 opacity-70 text-sm">
          🚀 Something went wrong — but you’re still awesome!
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;