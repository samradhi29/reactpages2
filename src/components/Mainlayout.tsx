import React from 'react';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';

const Mainlayout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
      
      {/* Top Navbar */}
      <div className="h-16 bg-gray-800 border-b border-gray-700 flex items-center px-4">
      <Navbar/>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">B</span>
            </div>
            <span className="text-sm text-gray-300">MacBook Pro 16" - 26</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <div className="text-sm">
                <div className="text-blue-400">Hi Muhammad Asad</div>
                <div className="text-xs text-gray-400">welcome back!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-1 overflow-hidden">
        
    
        <div className="w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto">
         <LeftSidebar/>
          {/* INSERT YOUR LEFT SIDEBAR COMPONENT HERE */}
          <div className="p-4 space-y-2">
            <div className="bg-purple-600 text-white px-3 py-2 rounded text-sm">
              Events
            </div>
            <div className="pl-6 space-y-1">
              <div className="text-purple-400 text-sm py-1">New Requests</div>
              <div className="text-gray-300 text-sm py-1">Estimate</div>
              <div className="text-gray-300 text-sm py-1">Events</div>
              <div className="text-gray-300 text-sm py-1">Partial Requests</div>
            </div>
            
            <div className="text-gray-300 px-3 py-2 text-sm">Positions</div>
            <div className="text-gray-300 px-3 py-2 text-sm">Contractors</div>
            
            <div className="text-gray-300 px-3 py-2 text-sm">Users</div>
            <div className="pl-6 space-y-1">
              <div className="text-gray-300 text-sm py-1">Admins</div>
              <div className="text-gray-300 text-sm py-1">Clients</div>
              <div className="text-gray-300 text-sm py-1">Coordinators</div>
            </div>
            
            <div className="text-gray-300 px-3 py-2 text-sm">Profile</div>
            
            <div className="mt-auto pt-4">
              <div className="text-gray-300 px-3 py-2 text-sm flex items-center">
                <span className="mr-2">⏏</span>
                Logout
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-900 overflow-y-auto">
          {/* INSERT YOUR EVENT REQUESTS TABLE COMPONENT HERE */}
          <div className="p-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                <h2 className="text-xl font-semibold text-white">Event Requests</h2>
              </div>
              
              <div className="p-4">
                <div className="mb-4 flex justify-between items-center">
                  <div></div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="text" 
                      placeholder="Search here" 
                      className="bg-gray-700 text-white px-3 py-2 rounded text-sm"
                    />
                    <button className="bg-purple-600 text-white px-3 py-2 rounded text-sm">
                      +
                    </button>
                  </div>
                </div>
                
                {/* Table placeholder */}
                <div className="bg-gray-700 rounded p-4 text-center text-gray-400">
                  Your Event Requests Table Component Goes Here
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Mainlayout;