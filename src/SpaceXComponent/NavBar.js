import { useState, useEffect } from "react"

export default function Navbar(){
    const [date, setDate]= useState(new Date())
    useEffect(()=>{
        setTimeout(() => {
            setDate(new Date())
        }, 1000);
    })
    return(
        <div className="bg-dark navbar">
         <h1>SpaceX Launch</h1>
         <p style={{fontSize:'15px'}}>{date.toLocaleTimeString()}  {date.toLocaleDateString()}</p>
        </div>
    )
}