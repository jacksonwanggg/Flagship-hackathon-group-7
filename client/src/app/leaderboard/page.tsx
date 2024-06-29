"use client";

import React from 'react';
import PlayerCard from '@/components/PlayerCard';// Assuming the correct path is '../components/PlayerCard/PlayerCard'
import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';


export default function Leaderboard() {
    const [tab, setTab] = useState("friends"); 

    const friends = [
        { img: "/assets/kj.jpg", img1: "/assets/sheepchad.png", img2: "/assets/sharkchad.png", img3: "/assets/giraffechad.png", name: 'Kj', level: 260, petAmount: 80, questAmount: 120 },
        { img: "/assets/andrew.jpg", img1: "/assets/frogchad.jpg", img2: "/assets/giraffeman.png", img3: "/assets/sheeper.png", name: 'Andrew', level: 230, petAmount: 42, questAmount: 102 },
        { img: "/assets/jackson.jpg", img1: "/assets/sharky.png", img2: "/assets/lizardman.png", img3: "/assets/kitty.png", name: 'Jackson', level: 150, petAmount: 36, questAmount: 75 },
        { img: "/assets/eric.jpg", img1: "/assets/frogman.jpg", img2: "/assets/waterlizard.png", img3: "/assets/giraffeboy.png", name: 'Eric', level: 99, petAmount: 28, questAmount: 65 },
        { img: "/assets/jerry.jpg", img1: "/assets/chickboy.jpg", img2: "/assets/sharkchad.png", img3: "/assets/giraffechad.png", name: 'Jerry', level: 1, petAmount: 3, questAmount: 1 }
    ];

    const global = [
        { img: "/assets/angella.png", img1: "/assets/monkeychad.png", img2: "/assets/whalechad.png", img3: "/assets/pangolin.png", name: 'Angella', level: 999, petAmount: 90, questAmount: 510 },
        { img: "/assets/richard.png", img1: "/assets/frogchad.jpg", img2: "/assets/hedgehogking.png", img3: "/assets/fairysnake.png", name: 'Richard', level: 999, petAmount: 90, questAmount: 509 },
        { img: "/assets/nicole.jpg", img1: "/assets/duckchad.png", img2: "/assets/sheepchad.png", img3: "/assets/whalechad.png", name: 'Nicole', level: 999, petAmount: 90, questAmount: 520 },
        { img: "/assets/lebronsunshine.jpg", img1: "/assets/monkeybron.png", img2: "/assets/giraffechad.png", img3: "/assets/giraffeboy.png", name: 'LeBron', level: 998, petAmount: 90, questAmount: 499 },
        { img: "/assets/mexican.png", img1: "/assets/chickboy.jpg", img2: "/assets/sharkchad.png", img3: "/assets/giraffechad.png", name: 'Leh-Bron', level: 997, petAmount: 89, questAmount: 420 },
        { img: "/assets/fortnite.png", img1: "/assets/sheepchad.png", img2: "/assets/sharkchad.png", img3: "/assets/giraffechad.png", name: 'LeGamer', level: 500, petAmount: 80, questAmount: 120 },
    ];

    const router = useRouter();

    return (
        <div className="w-screen h-screen bg-gradient-to-t from-green-700 to-green-400">
            <div className='py-8 pb-4 border-b-1'>
                <div className='flex flex-col justify-center gap-4 '>
                    <PersonIcon className='flex justify-start ml-[89%] absolute text-white scale-[1.5]' onClick={() => { router.push('/profile'); }} />
                    <PersonAddIcon className='flex justify-end ml-[6%] absolute text-white scale-[1.5]' />
                    <p className='text-4xl font-bold text-white flex justify-center'>Leaderboard </p>
                </div>
                <div className='flex flex-row w-full justify-center gap-4'>
                    <button
                        className={`text-2xl ${tab === 'friends' ? 'text-white underline' : 'text-[#E3E3E3]'}`}
                        onClick={() => setTab('friends')}
                    >
                        friends
                    </button>
                    <p className='text-white text-2xl'>|</p>
                    <button
                        className={`text-2xl ${tab === 'global' ? 'text-white underline' : 'text-[#E3E3E3]'}`}
                        onClick={() => setTab('global')}
                    >
                        global
                    </button>
                </div>
            </div>
            <div className='bg-white py-2 h-fit rounded-t-[30px] overflow-y-auto'>
                {tab === 'friends' && (
                    <div className='visible'>
                        {friends.map((player, index) => (
                            <PlayerCard
                                key={index}
                                img={player.img}
                                img1={player.img1}
                                img2={player.img2}
                                img3={player.img3}
                                name={player.name}
                                level={player.level}
                                petAmount={player.petAmount}
                                questAmount={player.questAmount}
                                delay={`${index * 0.2}`}
                            />
                        ))}
                    </div>
                )}
                {tab === 'global' && (
                    <div className='visible'>
                        {global.map((player, index) => (
                            <PlayerCard
                                key={index}
                                img={player.img}
                                img1={player.img1}
                                img2={player.img2}
                                img3={player.img3}
                                name={player.name}
                                level={player.level}
                                petAmount={player.petAmount}
                                questAmount={player.questAmount}
                                delay={`${index * 0.2}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
