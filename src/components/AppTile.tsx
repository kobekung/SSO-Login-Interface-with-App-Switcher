import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
export const AppTile = ({
  app,
  isRecent
}) => {
  return <div className={`relative overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ${isRecent ? 'bg-white' : 'bg-white'}`}>
      <div className="p-5">
        <div className={`h-10 w-10 rounded-lg ${app.color} flex items-center justify-center text-white mb-3`}>
          {app.icon}
        </div>
        <h3 className="text-lg font-medium text-gray-800">{app.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{app.description}</p>
        <div className="mt-4 flex items-center">
          <a href="#" className="text-sm text-blue-600 font-medium flex items-center hover:text-blue-800">
            Launch
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
      {isRecent && <div className="absolute top-0 right-0 mt-1 mr-1">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
            Recent
          </span>
        </div>}
    </div>;
};