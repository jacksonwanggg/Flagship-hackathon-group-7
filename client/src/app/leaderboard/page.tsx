import React from 'react';
import Link from 'next/link';
import PlayerCard from '@/components/PlayerCard';// Assuming the correct path is '../components/PlayerCard/PlayerCard'

export default function Leaderboard() {
    const players = [
        { img: "/assets/kj.jpg", img1: "/assets/sheepchad.png", img2: "/assets/sharkchad.png", img3: "/assets/giraffechad.png", name: 'Kj', level: 500, petAmount: 80, questAmount: 120 },
        { img: "/assets/andrew.jpg", img1: "/assets/frogchad.jpg", img2: "/assets/giraffeman.png", img3: "/assets/sheeper.png", name: 'Andrew', level: 230, petAmount: 42, questAmount: 80 },
        { img: "/assets/jackson.jpg", img1: "/assets/sharky.png", img2: "/assets/lizardman.png", img3: "/assets/kitty.png", name: 'Jackson', level: 150, petAmount: 36, questAmount: 75 },
        { img: "/assets/eric.jpg", img1: "/assets/frogman.jpg", img2: "/assets/waterlizard.png", img3: "/assets/giraffeboy.png", name: 'Eric', level: 99, petAmount: 28, questAmount: 35 },
        { img: "/assets/jerry.jpg", img1: "/assets/chickboy.jpg", img2: "/assets/sharkchad.png", img3: "/assets/giraffechad.png", name: 'Jerry', level: 1, petAmount: 3, questAmount: 1 },
        { img: "/assets/frogchad.jpg", img1: "/assets/sheepchad.png", img2: "/assets/sharkchad.png", img3: "/assets/giraffechad.png", name: 'Poopman', level: 500, petAmount: 80, questAmount: 120 },
        { img: "/assets/frogchad.jpg", img1: "/assets/sheepchad.png", img2: "/assets/sharkchad.png", img3: "/assets/giraffechad.png", name: 'Kj', level: 500, petAmount: 80, questAmount: 120 },
    ];
    
    return (
        <div className="w-screen h-screen bg-gradient-to-t from-blue-800 to-green-300">
            <div className='py-8 pb-4 border-b-1'>
                <p className='text-4xl font-bold text-white flex justify-center'>Leaderboard</p>
                <div className='flex flex-row w-full justify-center gap-4'>
                    <p className='text-white text-2xl underline'>friends</p>
                    <p className='text-white text-2xl'>|</p>
                    <p className='text-[#E3E3E3] text-2xl'>global</p>
                </div>
            </div>
            <div className='bg-white py-2 h-full rounded-t-[30px] overflow-y-auto'>
                {players.map((player, index) => (
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
                {/* <PlayerCard img="/assets/frogchad.jpg" name='Kj' level='500' petAmount={80} questAmount={120} />
                <PlayerCard img="/assets/frogmanner.jpg" name='Jerry' level='200' petAmount={42} questAmount={23} />
                <PlayerCard img="/assets/frogman.jpg" name='Jackson' level='10' petAmount={23} questAmount={10} />
                <PlayerCard img="/assets/chickboy.jpg" name='Eric' level='2' petAmount={3} questAmount={3} />
                <PlayerCard img="/assets/kitty.png" name='Andrew' level='1' petAmount={2} questAmount={1} />
                <PlayerCard img="/assets/kitty.png" name='Andrew' level='1' petAmount={2} questAmount={1} />
                <PlayerCard img="/assets/kitty.png" name='Andrew' level='1' petAmount={2} questAmount={1} />
                <PlayerCard img="/assets/kitty.png" name='Andrew' level='1' petAmount={2} questAmount={1} /> */}
            </div>
        </div>
    )
}
