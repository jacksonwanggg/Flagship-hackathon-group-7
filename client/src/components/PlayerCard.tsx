import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  img: string;
  img1: string;
  img2: string;
  img3: string;
  name: string;
  level: number;
  petAmount: number;
  questAmount: number;
  delay: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  img,
  img1,
  img2,
  img3,
  name,
  level,
  petAmount,
  questAmount,
  delay,
}) => {
  return (
    <div
      className={`w-[90%] my-4 mx-6 flex justify-center bg-[#ffffff] border-2 border-black rounded-2xl animate-slideRight transform -translate-x-full ease-in-out shadow-xl}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex w-full flex-row gap-4">
        <div className="bg-[#1CB87C] bg-gradient-to-t from-green-600 to-green-300 p-2 py-8 flex rounded-l-2xl border-black border-r-2">
          <Image
            src={img}
            alt="Frogman"
            width={100}
            height={100}
            className="flex justify-center items-center border-2 border-black rounded-full"
          ></Image>
        </div>
        <div className="flex flex-[3] pb-4 flex-col w-full">
          <div className="flex flex-row w-full py-1 justify-center">
            <p className="text-2xl flex-1 flex justify-items-start text-black">
              {name}
            </p>
            <p className="text-2xl flex-1 flex justify-center text-black">
              Lvl {level}
            </p>
          </div>
          <div className="flex flex-col mr-5 bg-[#1CB87C] bg-gradient-to-t from-green-600 to-green-300 border-2 border-black rounded-xl">
            <div className="flex flex-row py-2 w-full border-b-2 border-black gap-2">
              <div className="flex flex-col flex-0.5">
                <p className="flex flex-[0.5] text-2xl text-white px-2">
                  Pets:
                </p>
                <p className="flex flex-[0.5] text-white px-2">
                  {petAmount}/90
                </p>
              </div>
              <div className="flex flex-1 flex-row w-full p-1 gap-2">
                <Image
                  src={img1}
                  alt="Frogman"
                  width={20}
                  height={1}
                  className="flex flex-1 justify-center items-center border-2 border-black rounded-full"
                ></Image>
                <Image
                  src={img2}
                  alt="Frogman"
                  width={20}
                  height={1}
                  className="flex flex-1 justify-center items-center border-2 border-black rounded-full"
                ></Image>
                <Image
                  src={img3}
                  alt="Frogman"
                  width={20}
                  height={1}
                  className="flex flex-1 justify-center items-center border-2 border-black rounded-full"
                ></Image>
              </div>
            </div>
            <p className="text-white text-2xl px-2">Quests: {questAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
