import React, { useState } from "react";
import Image from "next/image";
import { HERO_BG_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";

const filterLabels = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Free Parking",
  "Luxury Villa",
  "Beachfront",
  "Mountain View",
  "Private Pool",
  "City Center",
  "Countryside",
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  // Filter logic (optional, currently just highlights selected)
  const filteredListings = selectedFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(selectedFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center text-center mb-8">
        <Image
          src={HERO_BG_IMAGE}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium drop-shadow-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap justify-center mb-8">
        {filterLabels.map((label) => (
          <Pill
            key={label}
            label={label}
            selected={selectedFilter === label}
            onClick={() =>
              setSelectedFilter(selectedFilter === label ? null : label)
            }
          />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {filteredListings.map((property, idx) => (
          <div
            key={property.name + idx}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={property.image}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{property.name}</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-medium text-gray-700">
                  {property.rating}
                </span>
              </div>
              <div className="text-blue-600 font-bold text-xl mb-1">
                ${property.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-500 ml-1">
                  /night
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {property.category.map((cat) => (
                  <span
                    key={cat}
                    className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
