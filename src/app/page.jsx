import Link from 'next/link';
import Image from 'next/image';
import { FaCanadianMapleLeaf } from "react-icons/fa6";

import { FiCamera } from "react-icons/fi";

export default function Page(){
    return(
        <main className='flex min-h-screen flex-col '>
        <div class="backdrop-blur   rounded-lg  md:h-81 bg-transparent-200">
            <div className="flex h-13 rounded-lg bg-grey-300 p-5 md:h-55">
                <FiCamera className=" text-green-400 w-12 h-24"/>
                <p className='text-2xl text-gray-600 px-2 py-8'> picture perfect</p>
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex flex-col justify-left gap-7 rounded-lg bg-green-60 px-5 py-9 md: w-2/5 md:px-17">
            <div className=" ">
            <p className="  text text-gray-600 md:text-2xl  md:leading-normal px-0 py-20">
                <strong className=' text-green-400 md: text-3xl '>Welcome to picture perfect</strong> 
                , explore the art of nature photography at its finest.
            </p>
            <Link href="/login" className='flex items-center gap-6 self-start rounded-lg bg-green-400 px-5 py-2 text-sm font-medium text-white-600 transition-colors hover:bg-gray-500 md:text-base w-32'><span>Log in</span>
            </Link>
            <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
              
            </div>
                <FaCanadianMapleLeaf className="  px-10 text-green-800 w-12 h-16"/>
            </div>
            </div>

            </div>
            </div>
        </main>
    );
}