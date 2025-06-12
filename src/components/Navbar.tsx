import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between m-[5px]'>
      <div>
        <img src="public/bitcoin.png" alt="" className='h-[50px]'/>
      </div>
      <div className='flex gap-1'>
<img src="public/info.png"  alt="" className='h-[60px]' />
<img src="Notification.png" alt="" className='h-[60px]'/>
<div className='flex'>
  <img src="public/Ellipse.png" alt="" className='h-[60px]' />
  <div>
    <p className='text-amber-50'>Hi , <span className='text-emerald-500'>Muhammad Asad</span></p>
    <p className='text-amber-50'>welcome back!</p>
  </div>
</div>
      </div>
    </div>
  )
}
