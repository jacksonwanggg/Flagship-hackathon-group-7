import React from 'react';
import Link from 'next/link';
import PlayerCard from '@/components/PlayerCard';// Assuming the correct path is '../components/PlayerCard/PlayerCard'

export default function Leaderboard() {
    return (
        <div className="w-full h-screen bg-[#ebfbee]">
            <p className='text-4xl flex justify-center'>Leaderboard</p>
            <div className='flex flex-row w-full justify-center gap-4'>
                <p>friends</p>
                <p>|</p>
                <p>global</p>
            </div>
            <PlayerCard name='Andrew' level='500' petAmount={80} questAmount={120} />
            <PlayerCard name='Eric' level='200' petAmount={42} questAmount={23} />
            <PlayerCard name='Jackson' level='10' petAmount={23} questAmount={10} />
        </div>
    )
}
