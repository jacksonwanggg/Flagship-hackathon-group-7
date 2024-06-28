import React from 'react';

interface PlayerCardProps {
    name: string;
    level: string;
    petAmount: number;
    questAmount: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, level, petAmount, questAmount }) => {   
    return (
        <div className='w-[90%] my-4 ml-6 py-2 flex justify-center bg-[#b2f2bb] border-2 border-black rounded-2xl'>
            <div className='flex w-full p-2 flex-row gap-4'>
                <p className='flex flex-[1] justify-center items-center'>IMAGE</p>
                <div className='flex flex-[3] flex-col w-full'>
                    <div className='flex flex-row w-full py-1 justify-center'>
                        <p className='text-2xl flex-1 flex justify-center'>{name}</p>
                        <p className='text-2xl flex-1 flex justify-center'>Lvl {level}</p>
                    </div>
                    <div className='flex flex-col w-[90%] bg-[#40c057] p-2 border-2 border-black rounded-xl'>
                        <p>Pets: {petAmount}/90</p>
                        <p>Quests: {questAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;