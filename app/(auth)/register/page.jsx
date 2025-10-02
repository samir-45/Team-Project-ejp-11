'use client';

import GoogleSigninBtn from '@/components/(root)/GoogleSigninBtn';
import Link from 'next/link';
import React, { useState } from 'react';
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
  <circle cx="12" cy="7" r="4"></circle>
</svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
  <polyline points="22,6 12,13 2,6"></polyline>
</svg>;
const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
  <circle cx="12" cy="16" r="1"></circle>
  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>;
const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
  <circle cx="12" cy="12" r="3"></circle>
</svg>;
const EyeOffIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
  <line x1="1" y1="1" x2="23" y2="23"></line>
</svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
</svg>;

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
  <polyline points="20,6 9,17 4,12"></polyline>
</svg>;
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return <div className="flex items-center min-h-screen justify-center">
    <div className="w-full max-w-sm">
      { }
      <div className="signin-card bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6">
        { }
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-full mb-2">
            <UserIcon />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Create account
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Enter your details to get started
          </p>
        </div>

        <form className="space-y-4">
          { }
          <div className="space-y-2">
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Enter your full name" className="signin-input w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200" />
          </div>

          { }
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                <MailIcon />
              </div>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com" className="signin-input w-full pl-9 pr-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200" />
            </div>
          </div>

          { }
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                <LockIcon />
              </div>
              <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Create a password" className="signin-input w-full pl-9 pr-10 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200" />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          { }
          <div className="flex items-start space-x-2">
            <div className="relative flex items-center">
              <input id="terms" type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} className="sr-only" />
              <label htmlFor="terms" className="flex items-center cursor-pointer">
                <div className={`w-4 h-4 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center transition-all duration-200 ${isChecked ? 'bg-gray-900 dark:bg-gray-100 border-gray-900 dark:border-gray-100' : 'bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-500'}`}>
                  {isChecked && <CheckIcon />}
                </div>
              </label>
            </div>
            <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer leading-4">
              I agree to the{' '}
              <a href="#" className="text-gray-900 dark:text-gray-100 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-gray-900 dark:text-gray-100 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Sign in button */}
          { }
          <button type="submit" className="signin-button w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!isChecked}>
            Create account
          </button>
        </form>

        { }
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-black px-2 text-gray-500 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        { }
        <div>
          <GoogleSigninBtn></GoogleSigninBtn>
        </div>

        { }
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="./login" className="text-gray-900 dark:text-gray-100 font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  </div>;
};
export default RegisterPage;
const styles = `
  .signin-input:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  .dark .signin-input:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }

  .signin-button:hover {
    transform: translateY(-1px);
  }

  .signin-checkbox:checked + label .checkbox-icon {
    background-color: currentColor;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .signin-card {
    animation: fadeIn 0.3s ease-out;
  }
`;
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}