import React from "react";
import { QuestListProps } from "@/lib/types";
import Countdown from "@/components/Countdown";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Image from 'next/image';

const QuestInfo: React.FC<QuestListProps> = ({ questName, foodCount, itemCount, itemSrc}) => {
    return (
        <div className="flex flex-row border rounded-2xl mx bg-rose-400 py-4 my-1 px-3 gap-2 items-center shadow-inner shadow-2xl">
            <CameraAltIcon className="text-white" />
            <p className="flex w-[150px] text-white font-bold text-left ml-2">{questName}</p>
            <div className='flex flex-col items-center ml-auto'>
                <Image  src="/assets/food.png" alt="food" width={60} height={50}></Image>
                <p className="text-white font-bold">{foodCount}</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image src={itemSrc} alt="food" width={60} height={50}></Image>
                <p className="text-white font-bold">{itemCount}</p>
            </div>
        </div>
    )
}

export default QuestInfo;