import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white text-lg flex justify-between items-center '>
      <div className='p-[1rem] bg-blue-400 text-slate-600 text-4xl '>Header</div>
     <Link className='' href='/'>Home</Link>
     <Link className='ml-4' href='/productss'>productsss</Link>
     <Link className='' href='/about'>About</Link>
    </div>
  )
}

export default Header