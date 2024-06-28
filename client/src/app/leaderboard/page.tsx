import React from 'react';
import Link from 'next/link';

export default function Leaderboard() {
    return (
        <div className="w-full h-screen bg-[#ebfbee]">
            <p className='text-2xl flex justify-center'>Leaderboard</p>
            <div className='flex flex-row w-full justify-center'>
                <p>friends</p>
                <p>|</p>
                <p>global</p>
            </div>
            <p>gg</p>
        </div>
    )
}