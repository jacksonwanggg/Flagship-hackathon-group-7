import Link from 'next/link';
import PetsCarousel from '@/components/PetsCarousel1';
import Collections from '@mui/icons-material/AutoStories';

export default function Page() {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-blue-800 to-purple-500 flex flex-col justify-center items-center">
      <div className='py-8 pb-4 border-b-1 w-full flex flex-col items-center'>
        <p className='text-4xl font-bold text-white'>Pets</p>
        <Link href="/memories" className='mt-2'>
          <Collections className="text-white"/>
        </Link>
      </div>
      <div className='max-w-screen-sm w-9/12 mt-8 mb-[6rem]'>
        <PetsCarousel />
      </div>
    </div>
  );
}
