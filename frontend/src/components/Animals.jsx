import React from 'react'


const animalSounds = [
    { name: 'Cat', image: './images/cat.jpg', sound: './sounds/cat.mp3' },
    { name: 'Dog', image: './images/dog.jpg', sound: './sounds/dog.mp3' },
    { name: 'Cow', image: './images/cow.jpg', sound: './sounds/cow.mp3' },
    { name: 'Lion', image: './images/lion.jpg', sound: './sounds/lion.mp3' },
    { name: 'Elephant', image: './images/elephant.jpg', sound: './sounds/elephant.mp3' },
    { name: 'Donkey', image: './images/donkey.jpg', sound: './sounds/donkey.mp3' },
    { name: 'Horse', image: './images/horse.jpg', sound: './sounds/horse.mp3' },
    { name: 'Sheep', image: './images/sheep.jpg', sound: './sounds/sheep.mp3' },
    { name: 'Goat', image: './images/goat.jpg', sound: './sounds/goat.mp3' },
    {name: 'rhino', image: './images/rhino.jpg', sound: './sounds/rhino.mp3'},
  ];
const Animals = () => {
    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
      };
  return (
    <div className="animal-sounds-container grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
  {animalSounds && animalSounds.map((animal, index) => (
    <button
      key={index}
      className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg focus:outline-none transition-transform transform hover:scale-105"
      onClick={() => playSound(animal.sound)}
      style={{ backgroundColor: '#fff0e5' }}  // Optional: soft background color for visual appeal
    >
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center p-2">
        <span className="text-white font-semibold text-lg">{animal.name}</span>
      </div>
    </button>
  ))}
</div>
  )
}

export default Animals
