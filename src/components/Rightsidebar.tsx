import React from 'react';
import { Search, Eye } from 'lucide-react';

const RightSidebar = () => {
  const eventsData = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    eventName: 'Filled Name',
    eventStart: 'Jan 12, 2024',
    eventEnd: 'Jan 14, 2024',
    clientName: 'Muhammad Asad',
    contactInfo: '+1 234 566 7890',
    venue: 'Lorem Ipsum Dolor Sit Amet'
  }));

  return (
    <div className="w-[900px] flex flex-col gap-[20px] bg-[#0000004D] border-[2px] border-[#D175B6] rounded-2xl">
      {/* Event Request Header */}
      <div className="h-[70px] bg-[#0000004D] shadow-[0_0_30px_0_#D175B666] p-[20px] flex justify-between">
        <span className="font-kanit text-[20px] text-[#FFFFFF] mb-4 block">Event Requests</span>
        <div className="flex items-center gap-4">
          <div className="searchbox w-[300px] h-[44px] rounded-lg pr-[24px] pl-[16px] gap-[10px] border border-[#FFFFFF] shadow-[0_0_30px_0_#D175B666] flex items-center">
            <Search className="w-5 h-5 text-white opacity-80" />
            <span className="text-white font-kanit text-[16px] opacity-80">Search here</span>
          </div>

          <div className="h-[40px] w-[40px] flex items-center justify-center rounded-2xl border border-white shadow-[0_0_30px_0_#D175B666] bg-gradient-to-r from-[#FF00FF] to-[#8F00FF]">
            <span className="text-white text-[20px]">+</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="h-[833px] overflow-x-auto whitespace-nowrap rounded-2xl shadow-[0_0_30px_0_#D175B666] bg-[#0000004D]">
        <div className="min-w-[1100px]">
          {/* Header Row */}
          <div className="h-[50px] p-[10px] bg-[#D175B6] grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1.5fr] gap-4 text-white font-kanit text-[12px] items-center">
            <div className="flex items-center gap-1 cursor-pointer">
              Event Name
              <img src="/public/Arrow.png" alt="sort" className="w-3 h-3" />
            </div>
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
          </div>

          {/* Table Rows */}
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1.5fr] gap-4 px-4 py-3 border-b border-[#D175B6] text-white text-[12px] items-center"
            >
              <div className="flex items-center gap-2 rounded-md px-2 py-1">
                <Eye className="w-4 h-4 text-white hover:text-pink-400 transition-colors cursor-pointer" />
                <span className="px-2 py-1 rounded text-white text-[10px]">{event.eventName}</span>
              </div>
              <div className="text-gray-300">{event.eventStart}</div>
              <div className="text-gray-300">{event.eventEnd}</div>
              <div className="text-gray-300">{event.clientName}</div>
              <div className="text-gray-300">{event.contactInfo}</div>
              <div className="text-gray-300">{event.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;