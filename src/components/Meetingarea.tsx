import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronLeft } from 'lucide-react';

export default function Meetingarea() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      {/* Main Container */}
      <div className='relative w-[1180px] h-[1080px] rounded-3xl border-[2px] bg-gradient-to-br from-gray-850 via-slate-900 to-blue-950 py-[20px] px-[40px] border-[#D175B6] shadow-[0px_0px_30px_0px_#D175B633]'>

        {/* Header */}
        <div className="w-full flex items-center mb-[20px]">
          <ChevronLeft className="w-6 h-6 text-white cursor-pointer hover:text-pink-400 transition-colors mr-[10px]" onClick={() => navigate("/Event")} />
          <p className='font-kanit text-[32px] font-normal text-[#FFFFFF] break-words'>
            Event Name <span className='text-[20px] font-light ml-3'>(Venue Details)</span>
          </p>
        </div>

        {/* Tabs */}
        <div className='w-[780px] h-[48px] rounded-[10px] border-[2px] border-[#D175B6] flex mb-[28px]'>
          <div className='w-[140px] h-full flex items-center justify-center border-r border-[#D175B6]'>
            <span className='font-kanit font-medium text-[#D175B6] text-[16px] text-center break-words'>Event Details</span>
          </div>
          <div className='w-[280px] h-full px-[18px] bg-[#D175B6] flex items-center justify-center'>
            <span className='text-[#FFFFFF] text-[16px] font-kanit font-medium text-center break-words'>Assign Coordinator/Contractor</span>
          </div>
          <div className='w-[200px] h-full flex items-center justify-center border-r border-[#D175B6]'>
            <span className='font-kanit font-medium text-[#D175B6] text-[16px] text-center break-words'>Session Management</span>
          </div>
          <div className='w-[160px] h-full flex items-center justify-center'>
            <span className='font-kanit font-medium text-[#D175B6] text-[16px] text-center break-words'>Generate SOW</span>
          </div>
        </div>

        {/* Mid Content */}
        <div className='w-full flex gap-[24px]'>
          {/* Left Side */}
          <div className='w-[530px] flex flex-col gap-[12px]'>
            <p className='font-kanit font-medium text-[#FFFFFF] text-[18px] mb-[12px]'>Assign Coordinator</p>

            <div className='relative mb-[20px]'>
              <div className='flex items-center justify-between border border-white rounded-[10px] bg-[#1a1b2e] h-[44px]'>
                <input
                  className='flex-1 h-full px-[14px] bg-transparent text-white placeholder-gray-400 outline-none font-kanit text-[16px]'
                  type="text"
                  placeholder='Search Coordinator'
                />
                <div className='px-[14px] flex items-center'>
                  <ChevronDown className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            <p className='font-kanit font-medium text-[#D175B6] text-[16px] cursor-pointer hover:text-pink-300 transition-colors'>
              Add New Coordinator
            </p>
          </div>

          {/* Right Side */}
          <div className='w-[580px] flex flex-col gap-[12px]'>
            <p className='font-kanit font-medium text-[18px] text-[#FFFFFF] mb-[12px] break-words'>
              Event Name <span className='text-[16px] text-[#FFFFFF] font-light'>(Venue Here)</span>
            </p>

            <div className='w-full h-[44px] py-[10px] px-[14px] bg-[#1a1b2e] border-[2px] border-[#D175B6] rounded-[10px] flex justify-between items-center'>
              <span className='font-kanit font-light text-[15px] text-[#FFFFFF] break-words'>
                Start: <span className='font-bold'>12-12-2023</span>
              </span>
              <span className='font-kanit font-light text-[15px] text-[#FFFFFF] break-words'>
                Ends: <span className='font-bold'>15-12-2023</span>
              </span>
            </div>

            <div className='w-full h-auto py-[10px] px-[14px] bg-[#1a1b2e] border-[2px] border-[#D175B6] rounded-[10px] flex items-center'>
              <span className='font-kanit font-light text-[15px] text-[#FFFFFF] break-words'>
                Venue Address: <span className='font-bold'>Some Location 12, Name Here, City</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='w-full flex gap-[24px] mt-[28px]'>
          {/* Rooms List */}
          <div className='w-[340px]'>
            <p className='font-kanit font-medium text-[#FFFFFF] text-[18px] mb-[12px]'>Assign Contractor</p>
            <div className='bg-[#000] w-full h-[500px] rounded-[10px] p-[14px] border border-[#D175B6] shadow-[0_0_30px_0_#D175B633] flex flex-col gap-[14px] overflow-y-auto'>
              {[1, 2, 3, 4, 5].map((room, idx) => (
                <div
                  key={room}
                  className={`w-full min-h-[80px] p-[14px] rounded-[12px] ${idx === 0 ? 'bg-[#D175B6]' : 'border-[2px] border-[#D175B6]'} flex flex-col justify-between`}
                >
                  <div className='flex justify-between items-center flex-wrap'>
                    <span className='font-kanit text-[18px] text-white break-words'>Meeting Room {room}</span>
                    <div className='flex items-center gap-[6px]'>
                      <img src='/public/Star.png' alt="star" className='w-4 h-4' />
                      <span className={`${idx === 0 ? 'text-black' : 'text-[#D175B6]'} font-kanit text-[16px] break-words`}>12 Positions</span>
                    </div>
                  </div>
                  <span className='font-kanit text-[14px] text-white break-words'>12 Jan 2023 - 15 Jan 2023</span>
                </div>
              ))}
            </div>
          </div>

          {/* Positions Table */}
          <div className='w-[660px]'>
            <p className='font-kanit font-medium text-[#FFFFFF] text-[18px] mb-[12px]'>Positions</p>
            <div className='bg-[#000] border border-[#D175B6] rounded-[10px] shadow-[0_0_30px_0_#D175B633] h-[500px] overflow-y-auto'>
              <div className='grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-3 p-[14px] border-b border-[#D175B6]'>
                <span className='text-white text-[15px] font-kanit font-medium'>Position</span>
                <span className='text-white text-[15px] font-kanit font-medium'>Time</span>
                <span className='text-white text-[15px] font-kanit font-medium'>Info</span>
                <span className='text-white text-[15px] font-kanit font-medium'>Qty</span>
                <span></span>
              </div>

              {[...Array(6)].map((_, i) => (
                <div key={i} className='grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-3 p-[8px] border-b border-[#D175B6]'>
                  <span className='text-white text-[15px] font-kanit break-words'>Camera 1 (Video)</span>
                  <span className='text-white text-[15px] font-kanit break-words'>9 am - 7 pm</span>
                  <span className='text-white text-[15px] font-kanit break-words'>LP default</span>
                  <span className='text-white text-[15px] font-kanit break-words'>20</span>
                  <div className='relative'>
                    <select className='w-full border border-[#D175B6] rounded-[6px] px-[12px] py-[8px] text-white text-[15px] bg-transparent'>
                      <option>Select Contractor</option>
                    </select>
                    <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none' />
                  </div>
                </div>
              ))}

              <div className='flex justify-center items-center p-[14px] gap-[8px]'>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`w-[8px] h-[8px] rounded-full ${i === 2 ? 'bg-[#D175B6]' : 'bg-[#666]'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className='mt-[20px]'>
        <button className='w-[200px] h-[48px] bg-[#D85AD8] rounded-[10px] font-kanit font-medium text-[#FFFFFF] text-[17px] hover:bg-[#C165A6] transition-colors shadow-[0_30px_80px_0_rgba(255,0,255,0.3)] shadow-[inset_0_0_20px_0_rgba(0,0,0,0.6)]'>
          Save Edits
        </button>
      </div>
    </div>
  );
}
