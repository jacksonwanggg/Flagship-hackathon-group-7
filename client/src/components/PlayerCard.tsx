import React from 'react';
import Image from 'next/image';

interface PlayerCardProps {
    img: string;
    name: string;
    level: string;
    petAmount: number;
    questAmount: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({img, name, level, petAmount, questAmount }) => {   
    return (
        <div className='w-[90%] my-4 mx-6 flex justify-center bg-[#ffffff] border-2 border-black rounded-2xl shadow-xl'>
            <div className='flex w-full flex-row gap-4'>
                <div className='bg-[#1CB87C] p-2 rounded-l-2xl border-black border-r-2'>
                    <Image src={img} alt="Frogman" width={100} height={100} className='flex justify-center items-center border-2 border-black rounded-full'></Image>
                </div>
                <div className='flex flex-[3] flex-col w-full'>
                    <div className='flex flex-row w-full py-1 justify-center'>
                        <p className='text-2xl flex-1 flex justify-items-start'>{name}</p>
                        <p className='text-2xl flex-1 flex justify-center'>Lvl {level}</p>
                    </div>
                    <div className='flex flex-col w-[90%] bg-[#1CB87C] border-2 border-black rounded-xl'>
                        <p className='text-white width-full border-b-2 border-black px-2'>Pets: {petAmount}/90</p>
                        <p className='text-white px-2'>Quests: {questAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;