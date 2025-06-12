import { LogOut } from "lucide-react";

export default function LeftSidebar() {
  return (
    <div className="bg-black/50 sidebar w-[260px] h-[1010px] rounded-[16px] flex flex-col justify-between border-[2px] border-[#D175B6] shadow-[0_0_30px_0_#D175B666] p-8">
      <div className="dropdown w-[260px] h-[594px] flex flex-col gap-[4px] px-4 pt-4 relative">
        
        {/* Curved Lines Container */}
        <div className="absolute left-5 top-20 w-0.5" style={{ height: '480px' }}>
          {/* Main vertical line */}
          <div className="absolute left-0 top-0 w-0.5 bg-white" style={{ height: '480px' }}></div>
          
          {/* Curved connectors for Events dropdown - NO horizontal lines */}
          {[30, 60, 90, 120].map((top, index) => (
            <div key={index}>
              {/* Just the curved connector - no horizontal line */}
              <div 
                className="absolute left-0 w-4 h-4 border-2 border-white border-r-0 border-t-0"
                style={{ 
                  top: `${top - 16}px`,
                  borderRadius: '0 0 8px 0'
                }}
              ></div>
            </div>
          ))}

          {/* Curved connectors for Users dropdown - NO horizontal lines */}
          {[300, 330, 360, 390].map((top, index) => (
            <div key={`users-${index}`}>
              {/* Just the curved connector - no horizontal line */}
              <div 
                className="absolute left-0 w-4 h-4 border-2 border-white border-r-0 border-t-0"
                style={{ 
                  top: `${top - 16}px`,
                  borderRadius: '0 0 8px 0'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Events Button */}
        <div className="w-[200px] h-[56px] rounded-lg border-[2px] border-[#D175B6] py-[16px] px-[20px] flex items-center justify-between shadow-[0_0_30px_0_#D175B666] bg-[#0000004D]">
          <p className="text-[#D175B6] text-[14px] font-light font-kanit">Events</p>
          <span className="w-6 h-6 flex items-center justify-center rounded-full rotate-180 bg-gray-800 text-white">^</span>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-[8px] mt-2 relative pl-8 w-[200px]">
          <div className="bg-black border border-[#D175B6] shadow-[0_0_30px_0_#D175B666] rounded-md px-[14px] py-[8px]">
            <p className="text-[#D175B6] text-[14px] font-light font-kanit">New Requests</p>
          </div>
          
          <div className="flex items-center gap-[10px] py-[8px] px-[14px] justify-between">
            <span className="text-white text-[14px] font-light font-kanit">Estimate</span>
            <div className='bg-amber-50 text-[#D175B6] h-[25px] w-[25px] rounded-full text-center text-xs flex items-center justify-center'>9</div>
          </div>
          
          <div className="flex items-center gap-[10px] py-[8px] px-[14px]">
            <span className="text-white text-[14px] font-light font-kanit">Events</span>
          </div>
          
          <div className="flex items-center gap-[10px] py-[8px] px-[14px]">
            <span className="text-white text-[14px] font-light font-kanit">Partial Requests</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="relative">
          {['Positions', 'Contractors', 'Users'].map((item, index) => (
            <div key={index} className="w-full h-[52px] flex items-center justify-between px-[20px] py-[16px]">
              <span className="text-white text-[14px] font-kanit">{item}</span>
              {item === 'Users' && (
                <span className="w-6 h-6 flex items-center justify-center rounded-full rotate-180 bg-gray-800 text-white">^</span>
              )}
            </div>
          ))}
        </div>

        {/* Users Dropdown */}
        <div className="flex flex-col gap-[4px] relative pl-8">
          {['Admins', 'Clients', 'Coordinators'].map((role) => (
            <div key={role} className="flex items-center gap-[10px] px-[14px] py-[8px]">
              <span className="text-white text-[14px] font-light font-kanit">{role}</span>
            </div>
          ))}
        </div>

        {/* Profile */}
        <div className="w-full h-[52px] flex items-center justify-center px-[20px] py-[16px] relative">
          <span className="text-white text-[14px] font-kanit">Profile</span>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-auto pt-4 flex justify-center">
        <div className="w-[160px] h-[56px] rounded-[8px] py-[16px] flex items-center gap-[16px] bg-[#000000] shadow-[0_0_30px_0_#D175B666] px-[20px] mb-2">
          <LogOut size={20} className="text-white" />
          <span className="text-white font-kanit">Logout</span>
        </div>
      </div>
    </div>
  );
}