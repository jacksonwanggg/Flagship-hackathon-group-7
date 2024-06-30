import PetsCarousel from '@/components/PetsCarousel';
import { initialPets } from '@/components/PetsCarousel';

export default function Page() {
  return (
    
    <div className="w-screen h-screen bg-gradient-to-t from-blue-800 to-purple-500 flex flex-col justify-between">
      <div className='py-8 pb-4 w-full flex flex-col items-center'>
        <p className='text-4xl font-bold text-white'>Pets</p>
        <p className='text-white text-2xl '>Own 3 / 90</p>
      </div>
      <div className='w-full bg-white rounded-t-[30px] justify-center flex-grow'>   
          <PetsCarousel />
      </div>
    </div>
  );
}
