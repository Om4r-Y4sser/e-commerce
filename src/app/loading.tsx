import React from 'react'
import { BeatLoader } from "react-spinners";
export default function loading() {
  return (
    <>
    <div className="h-screen flex items-center justify-center">
        

        <BeatLoader color="#f43f5e" size={20} margin={3} speedMultiplier={1.1} />
    </div>
    </>
    
  )
}
