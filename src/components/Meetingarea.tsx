import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronLeft } from 'lucide-react';

export default function Meetingarea() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center'>
      {/* Main Container */}
      <div className='relative w-[980px] h-[918px] rounded-3xl border-[2px] bg-gradient-to-br from-gray-850 via-slate-900 to-blue-950 py-[16px] px-[32px] border-[#D175B6] shadow-[0px_0px_30px_0px_#D175B633]'>

        {/* Header */}
        <div className="w-full flex items-center mb-[16px]">
          <ChevronLeft className="w-5 h-5 text-white cursor-pointer hover:text-pink-400 transition-colors mr-[8px]" onClick={() => navigate("/Event")} />
          <p className='font-kanit text-[28px] font-normal text-[#FFFFFF]'>
            Event Name
            <span className='text-[18px] font-light ml-2'>(Venue Details)</span>
          </p>
        </div>

        {/* Tabs */}
        <div className='w-[660px] h-[44px] rounded-[8px] border-[2px] border-[#D175B6] flex mb-[24px]'>
          <div className='w-[120px] h-full flex items-center justify-center border-r border-[#D175B6]'>
            <span className='font-kanit font-medium text-[#D175B6] text-[14px]'>Event Details</span>
          </div>
          <div className='w-[230px] h-full px-[16px] bg-[#D175B6] flex items-center justify-center'>
            <span className='text-[#FFFFFF] text-[14px] font-kanit font-medium'>Assign Coordinator/Contractor</span>
          </div>
          <div className='w-[170px] h-full flex items-center justify-center border-r border-[#D175B6]'>
            <span className='font-kanit font-medium text-[#D175B6] text-[14px]'>Session Management</span>
          </div>
          <div className='w-[140px] h-full flex items-center justify-center'>
            <span className='font-kanit font-medium text-[#D175B6] text-[14px]'>Generate SOW</span>
          </div>
        </div>

        {/* Mid Content */}
        <div className='w-full flex gap-[16px]'>
          {/* Left Side */}
          <div className='w-[470px] flex flex-col gap-[10px]'>
            <p className='font-kanit font-medium text-[#FFFFFF] text-[16px] mb-[10px]'>Assign Coordinator</p>

            <div className='relative mb-[16px]'>
              <div className='flex items-center justify-between border border-white rounded-[8px] bg-[#1a1b2e] h-[40px]'>
                <input
                  className='flex-1 h-full px-[12px] bg-transparent text-white placeholder-gray-400 outline-none font-kanit text-[14px]'
                  type="text"
                  placeholder='Search Coordinator'
                />
                <div className='px-[12px] flex items-center'>
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <p className='font-kanit font-medium text-[#D175B6] text-[14px] cursor-pointer hover:text-pink-300 transition-colors'>
              Add New Coordinator
            </p>
          </div>

          {/* Right Side */}
          <div className='w-[470px] flex flex-col gap-[10px]'>
            <p className='font-kanit font-medium text-[16px] text-[#FFFFFF] mb-[10px]'>
              Event Name <span className='text-[14px] text-[#FFFFFF] font-light'>(Venue Here)</span>
            </p>

            <div className='w-full h-[40px] py-[8px] px-[12px] bg-[#1a1b2e] border-[2px] border-[#D175B6] rounded-[8px] flex justify-between items-center'>
              <span className='font-kanit font-light text-[13px] text-[#FFFFFF]'>
                Start: <span className='font-bold'>12-12-2023</span>
              </span>
              <span className='font-kanit font-light text-[13px] text-[#FFFFFF]'>
                Ends: <span className='font-bold'>15-12-2023</span>
              </span>
            </div>

            <div className='w-full h-[40px] py-[8px] px-[12px] bg-[#1a1b2e] border-[2px] border-[#D175B6] rounded-[8px] flex items-center'>
              <span className='font-kanit font-light text-[13px] text-[#FFFFFF]'>
                Venue Address: <span className='font-bold'>Some Location 12, Name Here, City</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='w-full flex gap-[16px] mt-[24px]'>
          {/* Rooms List */}
          <div className='w-[290px]'>
            <p className='font-kanit font-medium text-[#FFFFFF] text-[16px] mb-[10px]'>Assign Contractor</p>
            <div className='bg-[#000] w-full h-[420px] rounded-[8px] p-[12px] border border-[#D175B6] shadow-[0_0_30px_0_#D175B633] flex flex-col gap-[12px]'>
              {[1, 2, 3, 4, 5].map((room, idx) => (
                <div
                  key={room}
                  className={`w-full h-[72px] p-[12px] rounded-[10px] ${idx === 0 ? 'bg-[#D175B6]' : 'border-[2px] border-[#D175B6]'} flex flex-col justify-between`}
                >
                  <div className='flex justify-between items-center'>
                    <span className='font-kanit text-[16px] text-white'>Meeting Room {room}</span>
                    <div className='flex items-center gap-[4px]'>
                      <img src="/public/Star.png" alt="star" />
                      <span className={`${idx === 0 ? 'text-black' : 'text-[#D175B6]'} font-kanit text-[14px]`}>12 Positions</span>
                    </div>
                  </div>
                  <span className='font-kanit text-[12px] text-white'>12 Jan 2023 - 15 Jan 2023</span>
                </div>
              ))}
            </div>
          </div>

          {/* Positions Table */}
          <div className='w-[600px]'>
            <p className='font-kanit font-medium text-[#FFFFFF] text-[16px] mb-[10px]'>Positions</p>
            <div className='bg-[#000] border border-[#D175B6] rounded-[8px] shadow-[0_0_30px_0_#D175B633]'>
              <div className='grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-2 p-[12px] border-b border-[#D175B6]'>
                <span className='text-white text-[13px] font-kanit font-medium'>Position</span>
                <span className='text-white text-[13px] font-kanit font-medium'>Time</span>
                <span className='text-white text-[13px] font-kanit font-medium'>Info</span>
                <span className='text-white text-[13px] font-kanit font-medium'>Qty</span>
                <span></span>
              </div>

              {[...Array(6)].map((_, i) => (
                <div key={i} className='grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-2 p-[6px] border-b border-[#D175B6]'>
                  <span className='text-white text-[13px] font-kanit'>Camera 1 (Video)</span>
                  <span className='text-white text-[13px] font-kanit'>9 am - 7 pm</span>
                  <span className='text-white text-[13px] font-kanit'>LP default</span>
                  <span className='text-white text-[13px] font-kanit'>20</span>
                  <div className='relative'>
                    <select className='w-full border border-[#D175B6] rounded-[4px] px-[10px] py-[6px] text-white text-[13px] bg-transparent'>
                      <option>Select Contractor</option>
                    </select>
                    <ChevronDown className='absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none' />
                  </div>
                </div>
              ))}

              <div className='flex justify-center items-center p-[12px] gap-[6px]'>
                {[0, 1, 2, 3].map((d, i) => (
                  <div key={i} className={`w-[6px] h-[6px] rounded-full ${i === 2 ? 'bg-[#D175B6]' : 'bg-[#666]'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className='mt-[16px]'>
        <button className='w-[180px] h-[44px] bg-[#D85AD8] rounded-[8px] font-kanit font-medium text-[#FFFFFF] text-[15px] hover:bg-[#C165A6] transition-colors shadow-[0_30px_80px_0_rgba(255,0,255,0.3)] shadow-[inset_0_0_20px_0_rgba(0,0,0,0.6)]'>
          Save Edits
        </button>
      </div>
    </div>
  );
}
