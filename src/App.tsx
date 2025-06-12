
import {Routes, Route } from "react-router-dom";

import Event from "./components/Event";
import Meetingarea from "./components/Meetingarea";


import Pagemeeting from "./components/Pagemeeting";

export default function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Pagemeeting />} />
        <Route path="/event" element={<Event />} />
        <Route path="/meeting" element={<Meetingarea />} />
        {/* Add more routes as needed */}
      </Routes>
  
  );
}
