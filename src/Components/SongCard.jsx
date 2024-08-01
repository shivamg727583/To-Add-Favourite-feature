import React from 'react'
import { useState } from 'react';

function SongCard({songs, handleClick}) {

    // const [RealData,setData] = useState(songs.like);
 

  return (
    <div className='w-[90%]  mx-[5%] flex flex-wrap gap-10'>

{songs.map((elem,idx)=>

<div className="song w-72 rounded-xl px-1 py-2  bg-white relative" key={idx}>
    <div className="song__image w-full h-44 overflow-hidden rounded-xl bg-red-100">
        <img src={elem.img} alt="song image" className="w-full h-full object-cover" />
    </div>
    <div className="song__info w-full my-2 flex flex-col gap-2 px-2 mb-8">
        <h2 className="text-2xl font-bold">{elem.name}</h2>
        <h3 className="text-lg font-semibold">{elem.artist}</h3>
       
    </div>
    <button  onClick={()=>handleClick(idx)} className={`px-3 py-2 rounded-3xl text-white font-semibold  ${elem.like?"bg-blue-500":"bg-orange-500"}`}>{elem.like?"Added":"Add to Favourite"}</button>
</div>

)}



    </div>
  )
}

export default SongCard;