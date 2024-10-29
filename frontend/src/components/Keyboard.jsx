import React, { useEffect, useState } from "react";

const keyboardKeys = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const soundFiles = {
  1: "./sounds/1.wav",
  2: "./sounds/2.wav",
  3: "./sounds/3.wav",
  4: "./sounds/4.wav",
  5: "./sounds/5.wav",
  6: "./sounds/6.wav",
  7: "./sounds/7.wav",
  8: "./sounds/8.wav",
  9: "./sounds/9.wav",
  0: "./sounds/0.wav",
  A: "./sounds/a.mp3",
  B: "./sounds/b.mp3",
  C: "./sounds/c.mp3",
  D: "./sounds/d.mp3",
  E: "./sounds/e.mp3",
  F: "./sounds/f.mp3",
  G: "./sounds/g.mp3",
  H: "./sounds/h.mp3",
  I: "./sounds/i.mp3",
  J: "./sounds/j.mp3",
  K: "./sounds/k.mp3",
  L: "./sounds/l.mp3",
  M: "./sounds/m.mp3",
  N: "./sounds/n.mp3",
  O: "./sounds/o.mp3",
  P: "./sounds/p.mp3",
  Q: "./sounds/q.mp3",
  R: "./sounds/r.mp3",
  S: "./sounds/s.mp3",
  T: "./sounds/t.mp3",
  U: "./sounds/u.mp3",
  V: "./sounds/v.mp3",
  W: "./sounds/w.mp3",
  X: "./sounds/x.mp3",
  Y: "./sounds/y.mp3",
  Z: "./sounds/z.mp3",
};

// const emojis = {
//   '1': '🎈',
//   '2': '🐱',
//   '3': '🍎',
//   '4': '🚗',
//   '5': '🐶',
//   '6': '🌈',
//   '7': '🌞',
//   '8': '🎉',
//   '9': '🍭',
//   '0': '🍌',
//   'Q': '🌟',
//   'W': '🦄',
//   'E': '🚀',
//   'R': '🐢',
//   'T': '💧',
//   'Y': '🌻',
//   'U': '🐸',
//   'I': '🍓',
//   'O': '💥',
//   'P': '🌍',
//   'A': '🐼',
//   'S': '🌙',
//   'D': '🎵',
//   'F': '🔥',
//   'G': '🍩',
//   'H': '🐧',
//   'J': '🍕',
//   'K': '🍉',
//   'L': '🦁',
//   'Z': '🐞',
//   'X': '🍪',
//   'C': '🍒',
//   'V': '🍇',
//   'B': '🥕',
//   'N': '🌹',
//   'M': '🍔'
// };

const emojis = {
  1: "1️⃣",
  2: "2️⃣",
  3: "3️⃣",
  4: "4️⃣",
  5: "5️⃣",
  6: "6️⃣",
  7: "7️⃣",
  8: "8️⃣",
  9: "9️⃣",
  0: "0️⃣",
  Q: "👸", // Queen
  W: "🍉", // Watermelon
  E: "🥚", // Egg
  R: "🤖", // Robot
  T: "🌴", // Tree
  Y: "🦄", // Unicorn (Y sound for kids)
  U: "☂️", // Umbrella
  I: "🍦", // Ice cream
  O: "🐙", // Octopus
  P: "🍕", // Pizza
  A: "🍎", // Apple
  S: "🍓", // Star
  D: "🐶", // Dog
  F: "🐸", // Frog
  G: "🍇", // Grapes
  H: "🏠", // House
  J: "🦒", // Giraffe (J sound for kids)
  K: "🫖", // Key
  L: "🦁", // Lion
  Z: "🦓", // Zebra
  X: "📦", // Box
  C: "🐱", // Cat
  V: "🎻", // Violin
  B: "🍌", // Banana
  N: "🥜", // Nuts
  M: "🌝", // Moon
};
const Keyboard = ({ onKeyPress }) => {
  const [activeKey, setActiveKey] = useState(null);
  const playSound = (key) => {
    const upperKey = key.toUpperCase();
    if (soundFiles[upperKey]) {
      const audio = new Audio(soundFiles[upperKey]);
      audio.play();
    }
    setActiveKey(upperKey);
    if (onKeyPress) {
      onKeyPress(upperKey);
    }
    setTimeout(() => {
      setActiveKey(null);
    }, 200);
  };

  const handleKeyDown = (event) => {
    const pressedKey = event.key.toUpperCase();
    if (soundFiles[pressedKey]) {
      playSound(pressedKey);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="keyboard-container flex justify-center flex-wrap"> 
    {/* // mt-2 flex flex-col items-center" */}
    
      {keyboardKeys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row flex justify-center mb-4 flex-wrap">
          {row.map((key, keyIndex) => (
            <button
  key={keyIndex}
  className={`w-28 h-28 sm:w-12 sm:h-12 md:w-28 md:h-28 mx-1 my-1 rounded-lg text-lg md:text-2xl font-semibold transition-transform transform ${
    activeKey === key
      ? "bg-blue-900 text-white scale-95"  // Active state with blue background and white text
      : "bg-blue-900 text-white hover:bg-blue-100 hover:text-gray-900"  // Purple for normal state and orange on hover
  } border-2 border-purple-600 focus:outline-none shadow-lg`}
  onClick={() => playSound(key)}
>
  {/* Emoji or icon can be placed here */}

              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold drop-shadow-md">
                  {key}
                </span>
                {/* Display emoji if available */}
                <span
                  className={`${
                    rowIndex < 3
                      ? "mt-1 text-2xl sm:text-2xl md:text-4xl"
                      : "hidden sm:block"
                  } drop-shadow-md`}
                  style={{ color: "red" }}
                >
                  {emojis[key]}
                </span>
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
