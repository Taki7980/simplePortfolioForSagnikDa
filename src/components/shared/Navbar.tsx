import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-fit py-3 px-10 bg-[#003285]  justify-between hidden md:flex'>
            <div className="namelogo ml-10">
                  <Link href={"/"} className="font-bold text-xl text-white">Sagnik</Link>
            </div>
            <div className="mr-10">
                  <Link href={"/about"} className='text-white text-lg hover:text-slate-400' >about me</Link>
            </div>
    </div>
  )
}

export default Navbar