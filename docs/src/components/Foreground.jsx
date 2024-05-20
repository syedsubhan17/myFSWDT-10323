import React, { useState, useRef } from 'react';
import Cards from './Cards';


function Foreground() {

    const ref = useRef(null);
        //icon, desc,filesize, closeOrDownload, tagDetails
    const data =[
        {
            desc: "this is the backgroung color we want to display",
            filesize: ".9mb",
            close: true,
            tag:{
                isOpen: true,
                tagTitle: "Dowload Now",
                tagColor: "green"
            },
        },
        {
            desc: "this is the backgroung color we want to display",
            filesize: ".9mb",
            close: true,
            tag:{
                isOpen: true,
                tagTitle: "Dowload Now",
                tagColor: "orange"
            },
        },
        {
            desc: "this is the backgroung color we want to display",
            filesize: ".9mb",
            close: true,
            tag:{
                isOpen: true,
                tagTitle: "Dowload Now",
                tagColor: "green"
            },
        },
        {
            desc: "this is the backgroung color we want to display",
            filesize: ".9mb",
            close: true,
            tag:{
                isOpen: false,
                tagTitle: "Dowload Now",
                tagColor: "green"
            },
        },
    ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-6 flex-wrap p-5">
        
        {data.map((item, index)=>(
            <Cards data={item} reference={ref}/>
        ))}
    </div>
    

  )
}

export default Foreground
