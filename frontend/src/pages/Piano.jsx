import React from "react";
import Pianoboard from "../components/Pianoboard.jsx";

const Piano = () => {
  const handleKeyPress = (key) => {
    setLastPlayed(key);
  };
  return (
    <div
      className="min-h-[calc(100vh-56px)] flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <Pianoboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default Piano;
