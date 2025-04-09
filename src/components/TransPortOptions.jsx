import React from 'react';
import cabImg from "../assets/texi.jpeg";
import bikeImg from "../assets/bikeTexi.png";
import autoImg from "../assets/auto.jpg";

const transportOptions = [
  {
    title: "Cab",
    image: cabImg,
  },
  {
    title: "Auto",
    image: autoImg,
  },
  {
    title: "Bike",
    image: bikeImg,
  },
];

const TransportOptions = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Choose Your Ride
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {transportOptions.map((option, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-end">
                <h3 className="text-white text-xl font-semibold">{option.title}</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportOptions;
