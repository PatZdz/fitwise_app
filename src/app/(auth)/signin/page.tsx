'use client';
import React from 'react';
import GoogleSignInButton from './components/GoogleSignInButton';

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 text-center">FITWISE</h1>

        {/* Sign In Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Password"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-4 text-right">
            <a href="#" className="text-blue-500 text-sm">
              Nie pamiętasz hasła?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 mb-4 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mb-4">
          Nie masz konta?{' '}
          <a href="#" className="text-blue-500">
            Zarejestruj się
          </a>
        </div>

        {/* Google Sign-In Button */}
        <GoogleSignInButton />
      </div>
    </main>
  );
}