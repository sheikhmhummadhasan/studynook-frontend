
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-6'>
            <div className="">
                <h1 className="text-4xl font-bold">StudyNook</h1>
            </div>
            <div className=" flex items-center justify-evenly gap-3 p-3 px-7 rounded-full shadow-xl">
                <Link href={'/'} className='text-xl font-semibold'>Home</Link>
                <Link href={'/rooms'} className='text-xl font-semibold'>Rooms</Link>
            </div>
            <div className="flex items-center gap-3">
                <Link href={'/register'} className='px-7 py-2 border border-black rounded text-xl font-semibold'>Log in</Link>
                <Link href={'/register'} className='px-7 py-2 border border-black rounded text-xl font-semibold'>Sing in</Link>
            </div>
        </div>
    );
};

export default Navbar;