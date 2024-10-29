import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main className="flex-grow flex flex-col items-center  px-4 text-center py-2 bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6 mt-10">
          Welcome to TickleTunes!
        </h2>
        <p className="text-xl text-gray-700 max-w-xl">
          A fun and interactive way for kids to learn about musical instruments
          and animal sounds!
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mb-5">
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transform transition-transform hover:scale-105">
            <img
              src="/musical.jpg"
              alt="Musical Instruments"
              className=" mx-auto mb-3 object-cover "
            />
            <h3 className="text-xl font-semibold text-yellow-500">
              Explore Instruments
            </h3>
            <p className="text-gray-600">
              Listen to and learn about different musical instruments.
            </p>
            <Link
              to="/musical-instruments"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 block"
            >
              Start Exploring
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transform transition-transform hover:scale-105">
            <img
              src="/animals.jpg"
              alt="Animal Sounds"
              className=" w-48 h-48mx-auto mb-3 object-cover"
            />
            <h3 className="text-xl font-semibold text-yellow-500">
              Animal Sounds
            </h3>
            <p className="text-gray-600">
              Discover a world of animal sounds with TickleTunes!
            </p>
            <Link
              to="/animals"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 block"
            >
              Listen Now
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transform transition-transform hover:scale-105 ">
            <img
              src="/bird.jpg"
              alt="Birds Sounds"
              className=" w-48 h-48mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4 p-4">
              Birds Sounds
            </h3>
            <p className="text-gray-600">
              Discover a world of birds sounds with TickleTunes!
            </p>
            <Link
              to="/birds"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 block"
            >
              Listen Now
            </Link>
          </div>
        </div>
      </main>

      <footer className="dark: bg-gray-900 w-full py-4 text-center">
        <p className="text-gray-100">
          © 2024 TickleTunes. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default HomePage;
