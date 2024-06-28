import fs from 'fs';
import Image from 'next/image';
import PetDisplay from '@/components/Pets';

export default function Page() {
  let i = 0;
  return (
    <>
    <div>
      <PetDisplay i={i} width={500} height={300} layout='responsive' />
    </div>
        <div className="vertical-container">
          <button className="btn btn-secondary">FEED</button>
          <button className="btn btn-secondary">39/50 EXP</button>
        </div>
    </>
  );
}
