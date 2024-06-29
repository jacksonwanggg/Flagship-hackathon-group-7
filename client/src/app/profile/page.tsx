"use client"
import React from 'react';
import Image from 'next/image';
import PetDisplay from '@/components/PetDisplay';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();
    return (
        <div className='w-screen h-screen bg-[#ffa844] shadow-lg z-0'>
            <div className="relative w-full h-[35%] p-8">
                <div className="absolute inset-0 z-0">
                    <div className="absolute w-[400px] h-[400px] bg-[#ffb649] rounded-full top-[-140px] left-[-90px]"></div>
                    <div className="absolute w-[300px] h-[300px] bg-[#ffce49] rounded-full top-[-100px] left-[-100px]"></div>
                </div>
                <button onClick={() => { router.push('/leaderboard'); }}>
                    <ArrowBackIcon className='text-white scale-[1.5]' />
                </button>
                <div className="relative w-full flex flex-col z-10 justify-center items-center">
                    <Image src="/assets/eric.jpg" alt="Frogman" width={150} height={100} className='mb-2 flex relative justify-center items-center border-2 animate-fadeIn border-white rounded-full'></Image>
                    <p className='text-white font-bold flex justify-center animate-fadeIn text-4xl'>Eric Xu</p>
                    <p className='text-white text-2xl animate-fadeIn'>LVL 99</p>
                    <progress
                        className="progress progress-accent m-2 w-full max-w-xs"
                        value={70}
                        max="100"
                    ></progress>
                </div>
            </div>
            <div className='w-full rounded-t-[30px] border-2 border-white bg-white h-fit relative z-0'>
                <div className="flex h-full flex-col">
                    <div className="flex items-center w-full pt-5 text-black">
                        <div className="flex-grow border-t border-black ml-3"></div>
                            <span className="flex-shrink mx-4 font-bold text-2xl">Inventory</span>
                        <div className="flex-grow border-t border-black mr-3"></div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[80%] py-2 border mx-[10%] h-fit rounded-xl mt-2 border-black'>
                        <div className='flex flex-row w-full h-full justify-center gap-4'>
                            <div className='flex flex-col items-center'>
                                <Image  src="/assets/food.png" alt="food" width={60} height={50}></Image>
                                <p>320</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image  src="/assets/gemston.png" alt="gem" width={60} height={50}></Image>
                                <p>20</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image  src="/assets/gold.png" alt="gold" width={60} height={50}></Image>
                                <p>200</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-full pt-5 text-black">
                        <div className="flex-grow border-t border-black ml-3"></div>
                            <span className="flex-shrink mx-4 font-bold text-2xl">FitMons</span>
                        <div className="flex-grow border-t border-black mr-3"></div>
                    </div>
                    <div className='flex flex-col gap-5 py-5'>
                        <PetDisplay img1="/assets/sheepchad.png" img2="/assets/sharkchad.png" img3="/assets/giraffechad.png" />
                        <PetDisplay img1="/assets/fairysnake.png" img2="/assets/lizardman.png" img3="/assets/giraffeboy.png" />
                        <PetDisplay img1="/assets/hedgehogking.png" img2="/assets/kitty.png" img3="/assets/monkeybron.png" />
                    </div>
                </div>
            </div>
        </div> 
    );
}