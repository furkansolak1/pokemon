"use client"
import {React,useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';


function Header() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/${inputValue}`;
  };
  return (
    <div className=' bg-gray-700 flex justify-evenly'> 
        <Link href={"/"} className='flex justify-center h-full'>
            <Image src={'/images/25.png'} width={60} height={60} alt='pikachuuuu'/>
            <span className=' self-center text-yellow-400 text-lg'>Home</span>
        </Link>
        <form onSubmit={handleSubmit} className='flex p-4'>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          className='p-2 rounded-l-lg'
        />
        <button 
          type="submit" 
          className='bg-yellow-500 text-white p-2 rounded-r-lg'
        >
          Search
        </button>
      </form>

    </div>
  )
}

export default Header