import React from 'react';
import Image from 'next/image';
import PetDisplay from '@/components/PetDisplay';

export default function Profile() {
    return (
        <div className='w-screen h-screen bg-[#1dad52] rounded-2xl shadow-lg z-0'>
            <div className="relative w-full h-[30%] p-8">
                <div className="absolute inset-0 z-0">
                    <div className="absolute w-[400px] h-[400px] bg-[#22c55e] rounded-full top-[-140px] left-[-90px]"></div>
                    <div className="absolute w-[300px] h-[300px] bg-[#36d16f] rounded-full top-[-100px] left-[-100px]"></div>
                </div>
                <div className="relative w-full flex flex-col z-10 justify-center items-center">
                    <Image src="/assets/eric.jpg" alt="Frogman" width={150} height={100} className='mb-2 flex relative justify-center items-center border-2 border-white rounded-full'></Image>
                    <p className='text-white font-bold flex justify-center text-4xl'>Eric Xu</p>
                    <p className='text-white'>LVL 49 XP TO NEXT LEVEL 7000</p>
                </div>
            </div>
            <div className='w-full rounded-t-[30px] border-2 border-white bg-white h-[70%] relative z-0'>
                <div className="flex h-full flex-col">
                    <div className="flex items-center w-full pt-5 text-black">
                        <div className="flex-grow border-t border-black ml-3"></div>
                            <span className="flex-shrink mx-4 font-bold text-2xl">Inventory</span>
                        <div className="flex-grow border-t border-black mr-3"></div>
                    </div>
                    <div className='flex w-[80%] border my-2 mx-[10%] h-[10%] rounded-xl border-black'>
                        <div className='flex flex-row w-full gap-4 justify-evenly'>
                            <Image src="/assets/food.png" alt="food" width={65} height={50}></Image>
                            <p>item</p>
                            <p>item</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full pt-5 text-black">
                        <div className="flex-grow border-t border-black ml-3"></div>
                            <span className="flex-shrink mx-4 font-bold text-2xl">Pets</span>
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