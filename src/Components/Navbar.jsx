import React from 'react'

function Navbar({songs}) {

  var like =  songs.filter((elem,idx)=>elem.like)


  return (
    <div className='w-full h-[100px] flex items-center px-[100px] justify-between text-orange-500'>
<h1 className='text-2xl font-bold text-orange-500'>Music Player</h1>

<div className="link flex items-center gap-3">
    <a href="#home" className='text-lg'>Home</a>
   <a href="#favourite"> <button className='px-3 py-3 rounded-full bg-orange-500 text-white font-semibold'>Favourites <span className='py-1 px-2 shadow-md bg-orange-700 rounded-full '>{like.length}</span></button></a>
</div>
    </div>
  )
}

export default Navbar;