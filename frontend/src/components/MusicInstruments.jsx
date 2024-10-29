import React from 'react'



const musicalInstrumentSounds = [
    { name: 'Piano', image: './images/piano.jpg', sound: './sounds/piano.mp3' },
    { name: 'Drum', image: './images/drum.jpg', sound: './sounds/drum.mp3' },
    { name: 'Guitar', image: './images/guitar.jpg', sound: './sounds/guitar.mp3' },
    { name: 'Flute', image: './images/flute.jpg', sound: './sounds/flute.mp3' },
    { name: 'Violin', image: './images/violin.jpg', sound: './sounds/violin.mp3' },
    { name: 'Trumpet', image: './images/trumphet.jpg', sound: './sounds/trumphet.mp3' },
    { name: 'Saxophone', image: './images/saxophone.jpg', sound: './sounds/saxophone.mp3' },
    {name: 'accordion', image: './images/accordian.jpg', sound: './sounds/accordian.mp3'},
  ];

const MusicInstruments = () => {
    const playSound = (sound) => {
          const audio = new Audio(sound);
          audio.play();
        };

  return (
    <div className="animal-sounds-container grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
  {musicalInstrumentSounds && musicalInstrumentSounds.map((music, index) => (
    <button
      key={index}
      className="relative w-full h-66 rounded-lg overflow-hidden shadow-lg focus:outline-none transition-transform transform hover:scale-105"
      onClick={() => playSound(music.sound)}
      style={{ backgroundColor: '#fff0e5' }}  // Optional: soft background color for visual appeal
    >
      <img
        src={music.image}
        alt={music.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center p-2">
        <span className="text-white font-semibold text-lg">{music.name}</span>
      </div>
    </button>
  ))}
</div>
  )
}

export default MusicInstruments
