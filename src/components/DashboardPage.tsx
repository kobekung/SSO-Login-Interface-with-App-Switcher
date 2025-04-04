import React from 'react';
import { Header } from './Header';
import { AppTile } from './AppTile';
import { UserIcon, FileTextIcon, MailIcon, BarChartIcon, UsersIcon, HeadphonesIcon, CalendarIcon, FolderIcon } from 'lucide-react';
export const DashboardPage = ({
  user,
  onLogout
}) => {
  const apps = [{
    id: 1,
    name: 'HR Portal',
    description: 'Manage HR tasks and employee information',
    icon: <UserIcon />,
    color: 'bg-pink-500'
  }, {
    id: 2,
    name: 'Finance',
    description: 'Access financial reports and data',
    icon: <FileTextIcon />,
    color: 'bg-green-500'
  }, {
    id: 3,
    name: 'Email',
    description: 'Check and manage your emails',
    icon: <MailIcon />,
    color: 'bg-blue-500'
  }, {
    id: 4,
    name: 'Analytics',
    description: 'View business analytics and reports',
    icon: <BarChartIcon />,
    color: 'bg-purple-500'
  }, {
    id: 5,
    name: 'CRM',
    description: 'Manage customer relationships',
    icon: <UsersIcon />,
    color: 'bg-yellow-500'
  }, {
    id: 6,
    name: 'Helpdesk',
    description: 'Get technical support and assistance',
    icon: <HeadphonesIcon />,
    color: 'bg-red-500'
  }, {
    id: 7,
    name: 'Calendar',
    description: 'Schedule and manage appointments',
    icon: <CalendarIcon />,
    color: 'bg-indigo-500'
  }, {
    id: 8,
    name: 'Documents',
    description: 'Access and manage your documents',
    icon: <FolderIcon />,
    color: 'bg-teal-500'
  }];
  const recentApps = apps.slice(0, 4);
  return <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back, {user?.name}
          </h2>
          <p className="text-gray-600">
            Access your applications from the dashboard below
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Recently Used
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentApps.map(app => <AppTile key={app.id} app={app} isRecent />)}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            All Applications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {apps.map(app => <AppTile key={app.id} app={app} />)}
          </div>
        </div>
      </main>
    </div>;
};