import React from 'react';
import Link from 'next/link';
import PlayerCard from '@/components/PlayerCard';// Assuming the correct path is '../components/PlayerCard/PlayerCard'

export default function Leaderboard() {
    return (
        <div className="w-screen h-screen bg-[#1CB87C] ">
            <div className='bg-[rgb(28,184,124)] py-8 pb-4 border-b-1'>
                <p className='text-4xl font-bold text-white flex justify-center'>Leaderboard</p>
                <div className='flex flex-row w-full justify-center gap-4'>
                    <p className='text-white text-2xl underline'>friends</p>
                    <p className='text-white text-2xl'>|</p>
                    <p className='text-[#E3E3E3] text-2xl'>global</p>
                </div>
            </div>
            <div className='bg-white py-2 h-full rounded-t-[30px] overflow-y-auto'>
                <PlayerCard img="/assets/frogchad.jpg" name='Kj' level='500' petAmount={80} questAmount={120} />
                <PlayerCard img="/assets/frogmanner.jpg" name='Jerry' level='200' petAmount={42} questAmount={23} />
                <PlayerCard img="/assets/frogman.jpg" name='Jackson' level='10' petAmount={23} questAmount={10} />
                <PlayerCard img="/assets/chickboy.jpg" name='Eric' level='2' petAmount={3} questAmount={3} />
                <PlayerCard img="/assets/kitty.png" name='Andrew' level='1' petAmount={2} questAmount={1} />
                <PlayerCard img="/assets/kitty.png" name='Andrew' level='1' petAmount={2} questAmount={1} />
                <PlayerCard img="/assets/kitty.png" name='Andrew' level='1' petAmount={2} questAmount={1} />
                <PlayerCard img="/assets/kitty.png" name='Andrew' level='1' petAmount={2} questAmount={1} />
            </div>
        </div>
    )
}
