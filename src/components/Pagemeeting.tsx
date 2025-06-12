import React from 'react'
import Navbar from './Navbar'
import LeftSidebar from './LeftSidebar'
import Meetingarea from './Meetingarea'

export default function Pagemeeting() {
  return (
    <div className='m-3'>
      <Navbar/>
      <div className='flex gap-2'>
        <LeftSidebar/>
        <Meetingarea/>
      </div>
    </div>
  )
}
