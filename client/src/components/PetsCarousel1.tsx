'use client';

import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import '../styles/pets.module.css';

export interface Pet {
  evolutions: PetEvolution[];
  experience: number;
}

export interface PetEvolution {
  petName: string;
  imagePath: string;
  experience: number;
}

const expIncrement = 5;

const initialPets: Pet[] = [
  {
    evolutions: [
      {
        petName: "Frogman",
        imagePath: "frogman.jpg",
        experience: 0,
      },
      {
        petName: "Frogmanner",
        imagePath: "frogmanner.jpg",
        experience: 50,
      },
      {
        petName: "Frogchad",
        imagePath: "frogchad.jpg",
        experience: 100,
      },
    ],
    experience: 0,
  },
  {
    evolutions: [
      {
        petName: "Giraffeboy",
        imagePath: "giraffeboy.png",
        experience: 0
      },
      {
        petName: 'Giraffechad',
        imagePath: 'giraffechad.png',
        experience: 50
      },
      {
        petName: 'Giraffeman',
        imagePath: 'giraffeman.png',
        experience: 100
      }
    ],
    experience: 0
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function getPetEvolution(pet: Pet): PetEvolution {
  let petEvolution: PetEvolution = pet.evolutions[0];
  pet.evolutions.forEach((evolution) => {
    if (evolution.experience <= pet.experience) {
      petEvolution = evolution;
    }
  });
  return petEvolution;
}

function goingToEvolutionise(pet: Pet): boolean {
  let evolutionise: boolean = false;
  pet.evolutions.forEach((evolution) => {
    if ((pet.experience < evolution.experience) && (evolution.experience - (pet.experience + expIncrement) <= expIncrement)) {
      evolutionise = true;
    }
  });
  return evolutionise;
}

const PetsCarousel: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>(initialPets);
  const [animationClass, setAnimationClass] = useState<string>('');
  const [isShrinking, setIsShrinking] = useState(false);
  const [currentPetIndex, setCurrentPetIndex] = useState<number | null>(null);

  const handleFeedClick = (pet: Pet, index: number) => {
    setCurrentPetIndex(index);
    if (goingToEvolutionise(pet)) {
      setIsShrinking(true);
    }
    setTimeout(() => {
      setPets((prevPets) => {
        const updatedPets = [...prevPets];
        updatedPets[index].experience += expIncrement;
        if (updatedPets[index].experience > 100) {
          updatedPets[index].experience = 100;
        }
        return updatedPets;
      });
      setIsShrinking(false);
      setCurrentPetIndex(null);
    }, 500); // Duration of the shrink animation
  };

  return (
    <div className="carousel-container p-4 rounded-lg">
        {pets.length > 1 ? (
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            showDots
            ssr // means to render carousel on server-side.
            infinite
            autoPlaySpeed={1000}
            keyBoardControl
            customTransition="transform 300ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-wrapper"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item"
          >
            {pets.map((pet, index) => (
              <div key={index} className="carousel-item-content rounded-lg mb-6">
                <div className={`image-container ${animationClass} mb-4`}>
                  <Image
                    src={'/assets/' + getPetEvolution(pet).imagePath}
                    className={`transition-transform duration-500 ${isShrinking && currentPetIndex === index ? 'scale-0' : 'scale-100'} w-full rounded-xl aspect-square object-cover border-4 border-gray-300`}
                    alt={getPetEvolution(pet).petName}
                    width={1000}
                    height={1500}
                  />
                </div>
                <h2 className="text-5xl font-bold text-center mt-4">{getPetEvolution(pet).petName}</h2>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    onClick={() => handleFeedClick(pet, index)}
                    className="text-white text-2xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg w-64 py-2.5 text-center mb-2"
                  >
                    FEED
                  </button>
                </div>
                <progress className="progress mx-auto progress-accent w-full max-w-xs" value={pet.experience} max="100"></progress>
                <h1 className="text-5xl font-bold text-center mb-4 experience-header">{pet.experience}/100 EXP</h1>
              </div>
            ))}
          </Carousel>
        ) : (
          pets.map((pet, index) => (
            <div key={index} className="carousel-item-content rounded-lg mx-auto mb-6">
              <div className={`image-container ${animationClass} mb-4`}>
                <Image
                  src={'/assets/' + getPetEvolution(pet).imagePath}
                  className={`transition-transform duration-500 ${isShrinking && currentPetIndex === index ? 'scale-0' : 'scale-100'} w-full rounded-xl aspect-square object-cover border-4 border-gray-300`}
                  alt={getPetEvolution(pet).petName}
                  width={1000}
                  height={1500}
                />
              </div>
              <h2 className="text-5xl font-bold text-center mt-4">{getPetEvolution(pet).petName}</h2>
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={() => handleFeedClick(pet, index)}
                  className="text-white text-2xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg w-64 py-2.5 text-center mb-2"
                >
                  FEED
                </button>
              </div>
              <progress className="progress mx-auto progress-accent w-full max-w-xs" value={pet.experience} max="100"></progress>
              <h1 className="text-5xl font-bold text-center mb-4 experience-header">{pet.experience}/100 EXP</h1>
            </div>
          ))
        )}
      </div>
  );
};

export default PetsCarousel;
