import React from 'react'
import { TbGridDots } from 'react-icons/tb'
import Image from 'next/image';
import Link from 'next/link';

const Headers: React.FunctionComponent = () => {
    const url: string = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
    
    return (
        <div className='flex justify-end pr-4 pt-3 space-x-4 items-center '>
            <Link className='text-sm hover:underline hover:cursor-pointer' href="https://mail.google.com">Gmail</Link>
            <Link className='text-sm hover:underline hover:cursor-pointer' href="https://images.google.com">Images</Link>
            <TbGridDots className='text-4xl hover:bg-gray-200 p-2 rounded-full'/>
            <Image src={url} alt='profile' width={30} height={30} className='rounded-full object-cover' style={{height: 30}}/>
        </div>
    )
}

export default Headers;