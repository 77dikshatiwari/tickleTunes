import React, { useState, useEffect } from 'react';

// Define the piano keys
const pianoKeys = [
  { note: 'C', color: 'white', sound: './sounds/key01.mp3', keyCode: 'KeyQ' },
  { note: 'C#', color: 'black', sound: './sounds/key02.mp3', keyCode: 'KeyW' },
  { note: 'D', color: 'white', sound: './sounds/key03.mp3', keyCode: 'KeyE' },
  { note: 'D#', color: 'black', sound: './sounds/key04.mp3', keyCode: 'KeyR' },
  { note: 'E', color: 'white', sound: './sounds/key05.mp3', keyCode: 'KeyT' },
  { note: 'F', color: 'white', sound: './sounds/key06.mp3', keyCode: 'KeyY' },
  { note: 'F#', color: 'black', sound: './sounds/key07.mp3', keyCode: 'KeyU' },
  { note: 'G', color: 'white', sound: './sounds/key08.mp3', keyCode: 'KeyI' },
  { note: 'G#', color: 'black', sound: './sounds/key09.mp3', keyCode: 'KeyO' },
  { note: 'A', color: 'white', sound: './sounds/key10.mp3', keyCode: 'KeyP' },
  { note: 'A#', color: 'black', sound: './sounds/key11.mp3', keyCode: 'KeyA' },
  { note: 'B', color: 'white', sound: './sounds/key12.mp3', keyCode: 'KeyS' },
  // Repeat for a second octave
  { note: 'C2', color: 'white', sound: './sounds/key13.mp3', keyCode: 'KeyD' },
  { note: 'C#2', color: 'black', sound: './sounds/key14.mp3', keyCode: 'KeyF' },
  { note: 'D2', color: 'white', sound: './sounds/key15.mp3', keyCode: 'KeyG' },
  { note: 'D#2', color: 'black', sound: './sounds/key16.mp3', keyCode: 'KeyH' },
  { note: 'E2', color: 'white', sound: './sounds/key17.mp3', keyCode: 'KeyJ' },
  { note: 'F2', color: 'white', sound: './sounds/key18.mp3', keyCode: 'KeyK' },
  { note: 'F#2', color: 'black', sound: './sounds/key19.mp3', keyCode: 'KeyL' },
  { note: 'G2', color: 'white', sound: './sounds/key20.mp3', keyCode: 'KeyZ' },
  { note: 'G#2', color: 'black', sound: './sounds/key21.mp3', keyCode: 'KeyX' },
  { note: 'A2', color: 'white', sound: './sounds/key22.mp3', keyCode: 'KeyC' },
  { note: 'A#2', color: 'black', sound: './sounds/key23.mp3', keyCode: 'KeyV' },
  { note: 'B2', color: 'white', sound: './sounds/key24.mp3', keyCode: 'KeyB' },
];

const Piano = () => {
  const [activeKey, setActiveKey] = useState(null);

  const playSound = (key) => {
    if(!key) return;
    const audio = new Audio(key.sound);
    audio.play();
    setActiveKey(key.note);
    setTimeout(() => setActiveKey(null), 200);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
        const key = pianoKeys.find((k)=> k.keyCode === event.code);
        if(key) playSound(key);
        
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
  return (
    <div className="piano-container justify-center items-center rounded-lg mb-4"
    style={{
           backgroundImage: 'url("/background.jpg")',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
        //    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
         }}
    >
      <div className="flex">
        {pianoKeys.map((key, index) => (
          <button
            key={index}
            onClick={() => playSound(key)}
            className={`transition-transform duration-150 ${
              key.color === 'white'
                ? 'w-16 h-48 bg-white border-b-4 border-gray-300 shadow-lg rounded-b-lg'
                : 'w-16 h-32 bg-black border-b-4 border-gray-800 shadow-md rounded-b-lg'
            } ${
              activeKey === key.note
                ? 'transform translate-y-1 scale-95'
                : 'transform hover:scale-105'
            }`}
            style={{
              marginLeft: key.color === 'black' ? '-1rem' : '0',
              zIndex: key.color === 'black' ? 10 : 1,
            }}
          >
            <span className={`text-xs font-bold ${key.color === 'black' ? 'text-white' : 'text-gray-900'}`}>
              {key.note}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Piano;
