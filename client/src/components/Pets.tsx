import fs from 'fs';
import Image from 'next/image';
import React from 'react';

export interface Pet {
  petName: string,
  imagePath: string
}

const pets = (i: number): Pet => {
  const petsJson = fs.readFileSync('public/pets.json', 'utf8');
  const pets: Pet[] = JSON.parse(petsJson);
  i %= pets.length;
  return pets[i];
}

interface ImageComponentProps {
  i: number;
  width: number;
  height: number;
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
}


export default function PetDisplay({i, width, height, layout = 'responsive' }: ImageComponentProps) {
  return <Image 
      src={"/assets/" + pets(i).imagePath}
      alt={pets(i).petName}
      width={width} 
      height={height} 
      layout={layout}
    />
  ;
}
