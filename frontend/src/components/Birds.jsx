import React from 'react'

const BirdSounds = [
    {name: 'crow', image: './images/crow.jpg', sound: './sounds/crow.mp3'},
    {name: 'parrot', image: './images/parrot.jpg', sound: './sounds/parrot.mp3'},
    {name: 'peacock', image: './images/peacock.jpg', sound: './sounds/peacock.mp3'},
    {name: 'sparrow', image: './images/sparrow.jpg', sound: './sounds/sparrow.mp3'},
    {name: 'owl', image: './images/owl.jpg', sound: './sounds/owl.mp3'},
    {name: 'eagle', image: './images/eagle.jpg', sound: './sounds/chicken.mp3'},
    {name: 'pigeon', image: './images/pigeon.jpg', sound: './sounds/pigeon.mp3'},
    {name: 'cukoo', image: './images/cuckoo.jpg', sound: './sounds/cuckoo.mp3'},
  ];


const Birds = () => {
    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    }
  return (
    <div className="animal-sounds-container grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
  {BirdSounds && BirdSounds.map((bird, index) => (
    <button
      key={index}
      className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg focus:outline-none transition-transform transform hover:scale-105"
      onClick={() => playSound(bird.sound)}
      style={{ backgroundColor: '#fff0e5' }}  // Optional: soft background color for visual appeal
    >
      <img
        src={bird.image}
        alt={bird.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center p-2">
        <span className="text-white font-semibold text-lg">{bird.name}</span>
      </div>
    </button>
  ))}
</div>

  )
}

export default Birds
