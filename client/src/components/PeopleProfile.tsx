"use client";
import React from 'react';
import Image from 'next/image';
import PetDisplay from '@/components/PetDisplay';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";

interface PeopleProfileProps {
    player: Player;
    isOpen: boolean;
    onClose: () => void;
}


export interface Player {
    img: string;
    img1: string;
    img2: string;
    img3: string;
    name: string;
    level: number;
    petAmount: number;
    questAmount: number;
}
const PeopleProfile: React.FC<PeopleProfileProps> = ({ player, isOpen, onClose }) => {
    const router = useRouter();

    if (!isOpen) return null;

    return (
            <dialog id="my_modal_2" className="modal bg-blue-700 h-[80%] my-[80px] rounded-[30px] outline-none open">
                <div>
                <button onClick={onClose}>
                            <ArrowBackIcon className='text-white  absolute top-[25px] left-[30px] z-10 scale-[1.5]' />
                        </button>
                    <div className="relative w-full h-[100%] p-8">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute w-[400px] h-[400px] bg-[#3281f7] rounded-full top-[1px] left-[0.5px]"></div>
                            <div className="absolute w-[300px] h-[300px] bg-[#8adeff] rounded-full top-[-10px] left-[12%]"></div>
                        </div>

                        <div className="relative w-full flex flex-col z-10 mb-10 justify-center items-center">
                            <Image src={player.img} alt={player.name} width={150} height={100} className='mb-2 flex relative justify-center items-center border-2 animate-fadeIn border-white rounded-full'></Image>
                            <p className='text-white font-bold flex justify-center animate-fadeIn text-4xl'>{player.name}</p>
                            <p className='text-white text-2xl animate-fadeIn'>LVL {player.level}</p>
                        </div>
                    </div>
                    <div className='w-full rounded-[30px] border-2 border-white bg-white h-fit p-5 relative z-0'>
                        <div className="flex h-full flex-col">
                            <div className="btn my-5 mx-5 text-2xl bg-red-500 text-white">CHALLENGE</div>
                            <div className="flex items-center w-full pt-5 text-black">
                                <div className="flex-grow border-t border-black ml-3"></div>
                                    <span className="flex-shrink mx-4 font-bold text-2xl">FitMons</span>
                                <div className="flex-grow border-t border-black mr-3"></div>
                            </div>
                            <div className='flex flex-col gap-5 py-5'>
                                <PetDisplay img1={player.img1} img2={player.img2} img3={player.img3} />
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
    );
};

export default PeopleProfile;