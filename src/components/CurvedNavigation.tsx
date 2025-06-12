export default function CurvedNavigation() {
  const navItems = [
    { name: 'New Requests', active: true },
    { name: 'Estimate', active: false },
    { name: 'Events', active: false },
    { name: 'Partial Requests', active: false }
  ];

  return (
    <div className="bg-gray-900 p-8 min-h-screen">
      <div className="relative w-80 text-white font-sans">
        {/* Line container */}
        <div className="absolute left-5 top-0 w-0.5" style={{ height: '320px' }}>
          {/* Main vertical line */}
          <div className="absolute left-0 top-0 w-0.5 bg-white" style={{ height: '280px' }}></div>
          
          {/* Horizontal branches with connecting curves */}
          {[25, 73, 121, 169].map((top, index) => (
            <div key={index}>
              {/* Curved connector */}
              <div 
                className="absolute left-0 w-4 h-4 border-2 border-white border-r-0 border-t-0"
                style={{ 
                  top: `${top - 16}px`,
                  borderRadius: '0 0 8px 0'
                }}
              ></div>
              {/* Horizontal line */}
              
            </div>
          ))}
          
          {/* Bottom section */}
          <div>
            {/* Bottom curved connector */}
           
            {/* Bottom horizontal line */}
           
          </div>
        </div>
        
        {/* Navigation items */}
        {navItems.map((item, index) => (
          <div 
            key={index}
            className={`relative pl-16 py-3 my-2 cursor-pointer transition-colors duration-200 ${
              item.active 
                ? 'text-fuchsia-400 bg-fuchsia-400/10 rounded-lg' 
                : 'hover:text-fuchsia-300'
            }`}
          >
            {item.name}
          </div>
        ))}
        
        {/* Section title */}
        <div className="mt-10 mb-5 text-xl font-bold">Positions</div>
      </div>
    </div>
  );
}