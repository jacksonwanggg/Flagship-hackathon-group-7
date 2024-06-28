import fs from 'fs';
import Image from 'next/image';

export interface Pet {
  petName: string,
  imagePath: string
}

const pets = (): Pet[] => {
  const petsJSON = fs.readFileSync('public/assets/pets.json', 'utf8');
  return JSON.parse(petsJSON);
}

export default function PetsCarousel() {
  return (
    <div className="carousel rounded-box w-64">
      {pets().map(pet => (
        <div key={pet.petName} className="carousel-item w-full">
          <Image src={'/assets/'+pet.imagePath} className="w-full" alt={pet.petName} width={1000} height={1500}/>
        </div>))}
    </div>
  );
}