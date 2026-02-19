import { Bookmark, BookmarkCheck, Heart, HeartCrackIcon } from 'lucide-react'
import React, { useState } from 'react'
import { ButtonPrimary2 } from './Button'

const ActionB = () => {
    let [heart ,setheart] = useState(true)
    let [bookmark,setbookmark]=useState(true)
  return (
    <div className='flex gap-3.5 ml-27'>
       <button onClick={()=>setheart(!heart)}  className='size-10 flex justify-center items-center border-[1.5px] border-card rounded-full'>
        {
        heart?<Heart size={15} />:<HeartCrackIcon size={15}/>} </button>
       <button onClick={()=>setbookmark(!bookmark)} className='size-10 flex justify-center items-center border-[1.5px] border-card rounded-full'> {bookmark?<Bookmark size={15} />:<BookmarkCheck size={15} />}</button>
       <ButtonPrimary2 children={"Get in touch"}/>
    </div>
  )
}

export default ActionB