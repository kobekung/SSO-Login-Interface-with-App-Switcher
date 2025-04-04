import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheckIcon } from 'lucide-react';
export const TwoFactorAuth = ({
  onVerify
}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);
  const handleChange = (index, value) => {
    if (!/^[0-9]$/.test(value) && value !== '') return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (!code[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };
  const handleVerify = () => {
    if (code.join('').length === 6) {
      setIsLoading(true);
      // Simulate verification
      setTimeout(() => {
        setIsLoading(false);
        onVerify();
      }, 1500);
    }
  };
  useEffect(() => {
    // Auto-focus first input on component mount
    inputRefs.current[0].focus();
  }, []);
  return <div className="text-center">
      <ShieldCheckIcon className="mx-auto h-16 w-16 text-blue-500" />
      <h2 className="mt-6 text-3xl font-bold text-gray-800">
        Two-Factor Authentication
      </h2>
      <p className="mt-2 text-gray-600">
        Please enter the 6-digit code sent to your device
      </p>
      <div className="mt-8 flex justify-center space-x-2">
        {code.map((digit, index) => <input key={index} ref={el => inputRefs.current[index] = el} type="text" maxLength={1} value={digit} onChange={e => handleChange(index, e.target.value)} onKeyDown={e => handleKeyDown(index, e)} className="w-12 h-12 text-center text-xl font-bold border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />)}
      </div>
      <button onClick={handleVerify} disabled={isLoading || code.join('').length !== 6} className="mt-8 w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300">
        {isLoading ? <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> : 'Verify'}
      </button>
      <div className="mt-6 text-sm">
        <span className="text-gray-600">Didn't receive a code? </span>
        <button className="text-blue-600 font-medium hover:text-blue-500">
          Resend code
        </button>
      </div>
    </div>;
};