import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import Meetingarea from './Meetingarea';

export default function Pagemeeting() {
  return (
    <div className="m-2 md:m-3">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-2">
        {/* Sidebar should shrink or collapse on mobile if needed */}
        <LeftSidebar />
        <Meetingarea />
      </div>
    </div>
  );
}
