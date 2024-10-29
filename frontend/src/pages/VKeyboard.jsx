import React, { useState} from 'react'
import Keyboard from '../components/Keyboard.jsx'

const VKeyboard = () => {
    const [lastPlayed, setLastPlayed] = useState('')

  const handleKeyPress = (key) => {
    setLastPlayed(key)
  }
  return (
    
       <div className="rounded-lg p-2 max-w-8xl w-full">
        <h1 className="text-center text-3xl font-bold mb-1 text-gray-800">Kid's Virtual Keyboard</h1>
        <Keyboard onKeyPress={handleKeyPress} />
      {lastPlayed && <p className="text-center mt-2 text-xl">Last Played: {lastPlayed}</p>}
      </div>
 
  )
}

export default VKeyboard


// <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 flex items-center justify-center p-4">
       // </div>  
      {/* Main container with a playful background */}