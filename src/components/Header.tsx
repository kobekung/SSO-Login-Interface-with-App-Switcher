import React, { useState } from 'react';
import { ShieldIcon, LogOutIcon, BellIcon, UserIcon } from 'lucide-react';
export const Header = ({
  user,
  onLogout
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  return <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ShieldIcon className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-800">
              SecureConnect
            </h1>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 relative">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="ml-3 relative">
              <div>
                <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center max-w-xs bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  {user?.avatar ? <img className="h-8 w-8 rounded-full" src={user.avatar} alt={user.name} /> : <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <UserIcon className="h-4 w-4 text-blue-600" />
                    </div>}
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                    {user?.name}
                  </span>
                </button>
              </div>
              {showUserMenu && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <button onClick={onLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <div className="flex items-center">
                      <LogOutIcon className="h-4 w-4 mr-2" />
                      Sign out
                    </div>
                  </button>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </header>;
};