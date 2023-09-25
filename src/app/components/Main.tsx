"use client"

import React, { FormEventHandler, FunctionComponent, useState } from 'react'
import Image from 'next/image'
import { AiOutlineSearch, AiOutlineCamera } from 'react-icons/ai'
import { BiMicrophone } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const Main: FunctionComponent = () => {
    const googleLogo: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

    const [search, setSearch] = useState<string>('');
    const router = useRouter()

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        router.push(`https://google.com/search?q=${search}`);
    }
    return (
        <div className='items-center flex flex-col mt-28  '>

            <Image
                src={googleLogo}
                alt='Google Logo'
                width={100}
                height={270}
            />
            <form className='flex border items-center mt-7 px-5 py-2 rounded-full w-2/5 hover:shadow-md' onSubmit={(e)=> onSearchSubmit(e)}>
                <AiOutlineSearch className='text-xl text-slate-400' />
                <input type='text' className='w-full focus:outline-none ml-4' onChange={(e) => setSearch(e.target.value)} value={search} />
                <BiMicrophone className='text-3xl text-slate-400 mr-5' />
                <AiOutlineCamera className='text-3xl text-slate-400' />
            </form>
            <div className='mt-7'>
                <button className='bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border' onClick={(e)=>onSearchSubmit(e)}>Google Search</button>
                <button className='bg-slate-100 py-2 px-4 text-sm rounded hover:border' onClick={()=>router.push("https://www.google.com/doodles")}>I'm Feeling Lucky</button>
            </div>
        </div>
    )
}

export default Main