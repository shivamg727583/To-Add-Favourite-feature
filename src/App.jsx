import React from 'react'
import Navbar from './Components/Navbar'
import SongCard from './Components/SongCard'
import { useState } from 'react'

function App() {

  const songsData =[
    {
      name:"mahi we",
      describe:"Mahi va song",
      artist:"Arjit singh",
      img:"https://img.youtube.com/vi/VAdGW7QDJiU/maxresdefault.jpg",
      like:false
    },
    {
      name:"Julaam",
      artist:"Badshaah",
      describe:"Julaam song",
      img:"https://i.ytimg.com/vi/sRnhG-evoJI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgQyhZMA8=&rs=AOn4CLBoJ1dx774bre97bYfZr_1LsNWxsQ"
    ,like:false
    },
    {
      name:"Jaan",
      artist:"Karan",
      describe:"Jaan song",
      img:"https://i.ytimg.com/vi/0THaT3OdTv8/maxresdefault.jpg",
      like:false
    },
    {
      name:"Nikal Jana",
      artist:"Neil",
      describe:"Nikal Jana song",
      img:"https://i.ytimg.com/vi/ShxMrEWKrkE/maxresdefault.jpg",
      like:false
    }
  ]


 

 const [RealData, setData] = useState(songsData);

 var handleClick  = (idx)=>{

  setData((prev)=>{
    return prev.map((elem,elemIndex)=>{
      if(elemIndex==idx){
        return {...elem,like:!elem.like}
        }
        return elem;
    })
  })


}

 


  return (
   <>
 <div className="main w-full min-h-screen bg-gray-100">
 <Navbar songs={RealData} />

<SongCard   songs={RealData} handleClick={handleClick} />

 </div>
   
   
   
   </>
  )
}

export default App