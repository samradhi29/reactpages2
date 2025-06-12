import React from 'react';

import { Search, Eye, LogOut, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Bell, LayoutDashboard, Bitcoin } from 'lucide-react';
import { Info } from 'lucide-react';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';

export default function Event() {
   const eventsData = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    eventName: 'Filled Name',
    eventStart: 'Jan 12, 2024',
    eventEnd: 'Jan 14, 2024',
    clientName: 'Muhammad Asad',
    contactInfo: '+1 234 566 7890',
    venue: 'Lorem Ipsum Dolor Sit Amet',
    city: '-',
    state: '-',
    zipCode: '-'
  }));

  return (
    <div className="bg-gradient-to-r bg-gradient-to-br from-gray-850 bg-gradient-to-r from-black via-[#493183] to-[#210d39] py-[20px] px-[40px] border-[#D175B6] shadow-[0px_0px_30px_0px_#D175B633] min-h-screen p-[px]">
     <Navbar/>

      {/* Main Body */}
      <div className="flex gap-[20px]">
        {/* Sidebar */}
  


  
  <LeftSidebar/>
  
        {/* Event Content Area */}
        <div className="w-[900px] flex flex-col gap-[20px] bg-[#0000004D] border-[2px] border-[#D175B6] rounded-2xl ">
          {/* Event Request Header */}
          <div className="h-[70px] bg-[#0000004D] shadow-[0_0_30px_0_#D175B666] p-[20px] flex justify-between">
            <span className="font-kanit text-[20px] text-[#FFFFFF] mb-4 block">Event Requests</span>
            <div className="flex items-center gap-4">
              <div className="searchbox w-[300px] h-[44px] rounded-b-lg pr-[24px] pl-[16px] gap-[10px] border border-[#FFFFFF] shadow-[0_0_30px_0_#D175B666] flex items-center">
                <Search className="w-5 h-5 text-white opacity-80" />
                <span className="text-white font-kanit text-[16px] opacity-80">Search here</span>
              </div>

              <div className="h-[40px] w-[40px] flex items-center justify-center rounded-2xl border border-white shadow-[0_0_30px_0_#D175B666] bg-gradient-to-r from-[#FF00FF] to-[#8F00FF]">
                <span className="text-white text-[20px]">+</span>
              </div>
            </div>
          </div>

          {/* Table with Fixed First Column */}
          <div className="h-[833px] overflow-y-auto rounded-2xl shadow-[0_0_30px_0_#D175B666] bg-[#0000004D] relative">
            {/* Fixed Event Name Column */}
            <div className="absolute left-0 top-0 z-10 bg-[#0000004D]">
              {/* Fixed Header */}
              <div className="h-[50px] w-[150px] p-[10px] bg-[#D175B6] flex items-center border-r border-[#D175B6]">
                <div className="flex items-center gap-1 cursor-pointer text-white font-kanit text-[12px]">
                  Event Name
                  <img src="/public/Arrow.png" alt="sort" className="w-3 h-3" />
                </div>
              </div>
              
              {/* Fixed Column Data */}
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="h-[50px] w-[150px] px-4 py-3 border-b border-[#D175B6] border-r border-[#D175B6] flex items-center bg-[#0000004D] hover:bg-black/30 transition-colors"
                >
                  <div className="flex items-center gap-2 rounded-md px-2 py-1">
                    <Eye className="w-4 h-4 text-white hover:text-pink-400 transition-colors cursor-pointer" />
                    <span className="px-2 py-1 rounded text-white text-[10px]">{event.eventName}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Scrollable Table Content */}
            <div className="overflow-x-auto">
              <div className="min-w-[1400px] pl-[150px]">
                {/* Header Row (excluding Event Name) */}
                <div className="sticky top-0 h-[50px] p-[10px] bg-[#D175B6] grid grid-cols-[1fr_1fr_1fr_1fr_1.2fr_1fr_1fr_1fr] gap-4 text-white font-kanit text-[12px] items-center">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Event Start
                    <img src="/public/Arrow.png" alt="sort" className="w-3 h-3" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    Event End
                    <img src="/public/Arrow.png" alt="sort" className="w-3 h-3" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    Client Name
                    <img src="/public/Arrow.png" alt="sort" className="w-3 h-3" />
                  </div>
                  <div className="cursor-pointer">Contact Info</div>
                  <div className="cursor-pointer">Venue</div>
                  <div className="cursor-pointer">City</div>
                  <div className="cursor-pointer">State</div>
                  <div className="cursor-pointer">Zip</div>
                </div>

                {/* Table Rows (excluding Event Name) */}
                {eventsData.map((event) => (
                  <div
                    key={event.id}
                    className="grid grid-cols-[1fr_1fr_1fr_1fr_1.2fr_1fr_1fr_1fr] gap-4 px-4 py-3 border-b border-[#D175B6] text-white text-[12px] items-center hover:bg-black/30 transition-colors h-[50px]"
                  >
                    <div className="text-gray-300">{event.eventStart}</div>
                    <div className="text-gray-300">{event.eventEnd}</div>
                    <div className="text-gray-300">{event.clientName}</div>
                    <div className="text-gray-300">{event.contactInfo}</div>
                    <div className="text-gray-300">{event.venue}</div>
                    <div className="text-gray-300">{event.city}</div>
                    <div className="text-gray-300">{event.state}</div>
                    <div className="text-gray-300">{event.zipCode}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}