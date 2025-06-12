
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronLeft } from 'lucide-react'

export default function Meetingarea() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-[1334px] h-[917px] rounded-4xl border-[2px] bg-gradient-to-br from-gray-850 via-slate-900 to-blue-950 py-[20px] px-[40px] border-[#D175B6] shadow-[0px_0px_30px_0px_#D175B633]'>
      {/* Header with back arrow and title */}
      <div className="w-[1254px] h-[40px] gap-[10px] flex items-center mb-[20px]">
        <ChevronLeft className="w-6 h-6 text-white cursor-pointer hover:text-pink-400 transition-colors "  onClick={() => navigate("/Event")} />
        <p className='font-kanit text-[40px] font-normal text-[#FFFFFF]'>
          Event Name
          <span className='font-kanit text-[24px] font-light text-[#FFFFFF] ml-2'>(Venue Details)</span>
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className='w-[739px] h-[50px] rounded-[8px] border-[2px] border-[#D175B6] flex mb-[30px]'>
        {/* Event Details Tab */}
        <div className='w-[134px] h-[50px] px-[20px] flex items-center justify-center border-r border-[#D175B6]'>
          <span className='font-kanit font-medium text-[#D175B6] text-[16px]'>Event Details</span>
        </div>
        
        {/* Assign Coordinator Tab - Active */}
        <div className='w-[271px] h-[50px] px-[20px] bg-[#D175B6] flex items-center justify-center'>
          <span className='text-[#FFFFFF] text-[16px] font-kanit font-medium'>Assign Coordinator/Coordinator</span>
        </div>
        
        {/* Session Management Tab */}
        <div className='w-[192px] h-[50px] px-[20px] flex items-center justify-center border-r border-[#D175B6]'>
          <span className='font-kanit font-medium text-[#D175B6] text-[16px]'>Session Management</span>
        </div>
        
        {/* Generate SOW Tab */}
        <div className='w-[142px] h-[50px] px-[20px] flex items-center justify-center'>
          <span className='font-kanit font-medium text-[#D175B6] text-[16px]'>Generate SOW</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='w-[1254px] flex gap-[20px]'>
        {/* Left Section - Assign Coordinator */}
        <div className='w-[617px] flex flex-col gap-[12px]'>
          <p className='font-kanit font-medium text-[#FFFFFF] text-[18px] mb-[12px]'>Assign Coordinator</p>
          
          {/* Search Input with Dropdown */}
          <div className='relative mb-[20px]'>
            <div className='flex items-center justify-between border-[1px] border-[#FFFFFF] rounded-[8px] bg-[#1a1b2e] h-[44px]'>
              <input 
                className='flex-1 h-full px-[16px] bg-transparent text-white placeholder-gray-400 outline-none font-kanit text-[14px]' 
                type="text" 
                placeholder='Search Coordinator'   
              />
              <div className='px-[16px] flex items-center'>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          {/* Add New Coordinator Link */}
          <p className='font-kanit font-medium text-[#D175B6] text-[14px] cursor-pointer hover:text-pink-300 transition-colors'>
            Add New Coordinator
          </p>
        </div>

        {/* Right Section - Event Details */}
        <div className='w-[617px] flex flex-col gap-[12px]'>
          {/* Event Name Header */}
          <div className='mb-[12px]'>
            <p className='font-kanit font-medium text-[18px] text-[#FFFFFF] mb-[12px]'>
              Event Name <span className='text-[16px] text-[#FFFFFF] font-light'>(Venue Here)</span>
            </p>
          </div>
          
          {/* Start and End Dates */}
          <div className='w-full h-[44px] py-[12px] px-[16px] bg-[#1a1b2e] border-[2px] border-[#D175B6] rounded-[8px] flex justify-between items-center'>
            <span className='font-kanit font-light text-[14px] text-[#FFFFFF]'>
              Start: <span className='font-kanit font-bold text-[14px]'>12-12-2023</span>
            </span>
            <span className='font-kanit font-light text-[14px] text-[#FFFFFF]'>
              Ends: <span className='font-kanit font-bold text-[14px]'>15-12-2023</span>
            </span>
          </div>
          
          {/* Venue Address */}
          <div className='w-full h-[44px] py-[12px] px-[16px] bg-[#1a1b2e] border-[2px] border-[#D175B6] rounded-[8px] flex items-center'>
            <span className='font-kanit font-light text-[14px] text-[#FFFFFF]'>
              Venue Address: <span className='font-kanit font-bold text-[14px]'>Some Location 12, Name Here, City, State.</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='w-[1254px] flex gap-[20px] mt-[30px]'>
        {/* Left Section - Assign Contractor */}
        <div className='w-[340px]'>
          <p className='font-kanit font-medium text-[#FFFFFF] text-[18px] mb-[12px]'>Assign Contractor</p>
          
          <div className='bg-[#000000] w-[340px] h-[491px] rounded-[2px] p-[16px] border-[1px] border-[#D175B6] shadow-[0px_0px_30px_0px_#D175B633] flex flex-col gap-[16px]'>
            
            {/* Meeting Room 1 - Active (Pink) */}
            <div className='w-[308px] h-[80px] rounded-[12px] p-[16px] bg-[#D175B6]'>
              <div className='flex items-center justify-between mb-[8px]'>
                <span className='font-kanit text-[20px] text-[#FFFFFF]'>Meeting Room 1</span>
                <div className='flex items-center gap-[4px]'>
                <img src="/public/Star.png" alt="" />
                  <span className='text-[#000000] font-kanit text-[16px] font-medium'>12 Positions</span>
                </div>
              </div>
              <span className='font-kanit text-[12px] font-light text-[#FFFFFF]'>Start from 12 Jan 2023 - Ends at 15 Jan, 2023</span>
            </div>

            {/* Meeting Room 2 */}
            <div className='w-[308px] h-[80px] border-[2px] border-[#D175B6] rounded-[12px] p-[16px] shadow-[0_0_30px_0_#D175B633]'>
              <div className='flex items-center justify-between mb-[4px]'>
                <span className='font-kanit text-[20px] text-[#FFFFFF]'>Meeting Room 2</span>
                <div className='flex items-center gap-[4px]'>
                 <img src="/public/Star.png" alt="" />
                  <span className='text-[#D175B6] font-kanit text-[16px] font-medium'>12 Positions</span>
                </div>
              </div>
              <span className='font-kanit text-[12px] font-light text-[#FFFFFF]'>Start from 12 Jan 2023 - Ends at 15 Jan, 2023</span>
            </div>

            {/* Meeting Room 3 */}
            <div className='w-[308px] h-[80px] border-[2px] border-[#D175B6] rounded-[12px] p-[16px] shadow-[0_0_30px_0_#D175B633]'>
              <div className='flex items-center justify-between mb-[4px]'>
                <span className='font-kanit text-[20px] text-[#FFFFFF]'>Meeting Room 3</span>
                <div className='flex items-center gap-[4px]'>
                <img src="/public/Star.png" alt="" />
                  {/* <div className='w-[16px] h-[16px] bg-white rounded-full'></div> */}
                  <span className='text-[#D175B6] font-kanit text-[16px] font-medium'>12 Positions</span>
                </div>
              </div>
              <span className='font-kanit text-[12px] font-light text-[#FFFFFF]'>Start from 12 Jan 2023 - Ends at 15 Jan, 2023</span>
            </div>

            {/* Meeting Room 4 */}
            <div className='w-[308px] h-[80px] border-[2px] border-[#D175B6] rounded-[12px] p-[16px] shadow-[0_0_30px_0_#D175B633]'>
              <div className='flex items-center justify-between mb-[4px]'>
                <span className='font-kanit text-[20px] text-[#FFFFFF]'>Meeting Room 4</span>
                <div className='flex items-center gap-[4px]'>
                 <img src="/public/Star.png" alt="" />
                  <span className='text-[#D175B6] font-kanit text-[16px] font-medium'>12 Positions</span>
                </div>
              </div>
              <span className='font-kanit text-[12px] font-light text-[#FFFFFF]'>Start from 12 Jan 2023 - Ends at 15 Jan, 2023</span>
            </div>

            {/* Meeting Room 5 */}
            <div className='w-[308px] h-[80px] border-[2px] border-[#D175B6] rounded-[12px] p-[16px] shadow-[0_0_30px_0_#D175B633]'>
              <div className='flex items-center justify-between mb-[4px]'>
                <span className='font-kanit text-[20px] text-[#FFFFFF]'>Meeting Room 5</span>
                <div className='flex items-center gap-[4px]'>
                
                  {/* <div className='w-[16px] h-[16px] bg-white rounded-full'></div> */}
                  <span className='text-[#D175B6] font-kanit text-[16px] font-medium'>12 Positions</span>
                </div>
              </div>
              <span className='font-kanit text-[12px] font-light text-[#FFFFFF]'>Start from 12 Jan 2023 - Ends at 15 Jan, 2023</span>
            </div>
          </div>
        </div>

        {/* Right Section - Positions Table */}
      <div className='w-[894px]'>           
  <p className='font-kanit font-medium text-[#FFFFFF] text-[18px] mb-[12px]'>Positions</p>                      
  <div className='bg-[#000000] border-[1px] border-[#D175B6] rounded-[8px] shadow-[0px_0px_30px_0px_#D175B633]'>             
    {/* Table Header */}             
    <div className='grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-4 p-[16px] border-b border-[#D175B6]'>               
      <span className='font-kanit font-medium text-[#FFFFFF] text-[14px]'>Position</span>               
      <span className='font-kanit font-medium text-[#FFFFFF] text-[14px]'>Time</span>               
      <span className='font-kanit font-medium text-[#FFFFFF] text-[14px]'>Info</span>               
      <span className='font-kanit font-medium text-[#FFFFFF] text-[14px]'>Quantity</span>               
      <span className='font-kanit font-medium text-[#FFFFFF] text-[14px]'></span>             
    </div>                          
    
    {/* Table Rows */}             
    {[...Array(8)].map((_, index) => (               
      <div key={index} className='grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-4 p-[6px] border-b border-[#D175B6] last:border-b-0'>                 
        <span className='font-kanit text-[14px] text-[#FFFFFF]'>Camera 1 (Video)</span>                 
        <span className='font-kanit text-[14px] text-[#FFFFFF]'>9 am - 7 pm</span>                 
        <span className='font-kanit text-[14px] text-[#FFFFFF]'>LP default</span>                 
        <span className='font-kanit text-[14px] text-[#FFFFFF]'>20</span>                 
        <div className='relative'>                   
          <select className='w-full border border-[#D175B6] rounded-[4px] px-[12px] py-[8px] text-[#FFFFFF] font-kanit text-[14px] appearance-none bg-transparent'>                     
            <option>Select Contractor</option>                   
          </select>                   
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />                 
        </div>               
      </div>             
    ))}                          
    
    {/* Pagination */}             
    <div className='flex justify-center items-center p-[16px] gap-[8px]'>               
      <div className='w-[8px] h-[8px] bg-[#666666] rounded-full'></div>               
      <div className='w-[8px] h-[8px] bg-[#666666] rounded-full'></div>               
      <div className='w-[8px] h-[8px] bg-[#D175B6] rounded-full'></div>               
      <div className='w-[8px] h-[8px] bg-[#666666] rounded-full'></div>             
    </div>           
  </div>         
</div>

      </div>

      </div>

      {/* Save Button - Outside the main container */}
      <div className='mt-[20px]'>         
        <button className='w-[200px] h-[50px] bg-[#D85AD8] rounded-[8px] font-kanit font-medium text-[#FFFFFF] text-[16px] hover:bg-[#C165A6] transition-colors shadow-[0_30px_80px_0_rgba(255,0,255,0.3)] shadow-[inset_0_0_20px_0_rgba(0,0,0,0.6)]'>           
          Save Edits         
        </button>       
      </div>
    </div>
  )
}