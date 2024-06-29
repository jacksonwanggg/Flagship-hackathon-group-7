import React from 'react';
import Image from 'next/image';

interface PetDisplayProps {
    img1: string;
    img2: string;
    img3: string;
}

const PetDisplay: React.FC<PetDisplayProps> = ({img1, img2, img3}) => {   
    return (
        <div className='flex flex-row justify-center gap-8'>
            <Image src={img1} alt="Frogman" width={100} height={100} className='mb-2 flex relative justify-center items-center border-2 border-white shadow-2xl rounded-full'></Image>
            <Image src={img2} alt="Frogman" width={100} height={100} className='mb-2 flex relative justify-center items-center border-2 border-white shadow-2xl rounded-full'></Image>
            <Image src={img3} alt="Frogman" width={100} height={100} className='mb-2 flex relative justify-center items-center border-2 border-white shadow-2xl rounded-full'></Image>
        </div>
    )
}

export default PetDisplay;