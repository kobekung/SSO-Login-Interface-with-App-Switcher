import React, { useState } from 'react';
import { TwoFactorAuth } from './TwoFactorAuth';
import { LogInIcon, ShieldIcon, UserIcon, KeyIcon } from 'lucide-react';
export const LoginPage = ({
  onLogin,
  showTwoFactor,
  onTwoFactorVerify
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin({
        name: 'Alex Johnson',
        email,
        avatar: 'https://i.pravatar.cc/150?img=32'
      });
    }, 1000);
  };
  return <div className="flex min-h-screen">
      {/* Branding Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 p-12 flex-col justify-between">
        <div>
          <div className="flex items-center">
            <ShieldIcon className="h-10 w-10 text-white" />
            <h1 className="ml-2 text-3xl font-bold text-white">
              SecureConnect
            </h1>
          </div>
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-white">
              Single Sign-On Portal
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Access all your enterprise applications with a single login.
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-4">
            {['HR Portal', 'Finance', 'CRM', 'Helpdesk', 'Email', 'Analytics'].map(app => <div key={app} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg px-4 py-2 text-white">
                {app}
              </div>)}
          </div>
          <p className="text-blue-100 mt-8">
            Securely access all your enterprise applications with a single
            authentication.
          </p>
        </div>
      </div>
      {/* Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {!showTwoFactor ? <>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">
                  Welcome Back
                </h2>
                <p className="text-gray-600 mt-2">
                  Sign in to access your applications
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input id="email" name="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <KeyIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input id="password" name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  {isLoading ? <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> : <>
                      <LogInIcon className="mr-2 h-4 w-4" /> Sign in
                    </>}
                </button>
              </form>
              <div className="mt-8">
                <p className="text-center text-sm text-gray-600">
                  Or sign in with
                </p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {['Google', 'Microsoft', 'Apple'].map(provider => <button key={provider} type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      {provider}
                    </button>)}
                </div>
              </div>
            </> : <TwoFactorAuth onVerify={onTwoFactorVerify} />}
        </div>
      </div>
    </div>;
};