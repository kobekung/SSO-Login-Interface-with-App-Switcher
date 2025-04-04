import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { DashboardPage } from './components/DashboardPage';
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const handleLogin = userData => {
    setShowTwoFactor(true);
    setCurrentUser(userData);
  };
  const handleTwoFactorVerify = () => {
    setShowTwoFactor(false);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };
  return <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? <LoginPage onLogin={handleLogin} showTwoFactor={showTwoFactor} onTwoFactorVerify={handleTwoFactorVerify} /> : <DashboardPage user={currentUser} onLogout={handleLogout} />}
    </div>;
}