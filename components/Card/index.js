import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Card({pokemon}) {
  
  const deneme =pokemon.url.split("/"); 
  var index= deneme[deneme.length-2];
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
  return (
    <Link href={`/${index}`}>
        <div className='transition ease-in-out delay-150  border-2  m-0.5 rounded shadow-lg shadow-gray-600 hover:scale-105'  >
            <div className='h-32  relative bg-white'>
                
                <Image className='max-w-xs m-auto rounded ' src={url} fill alt={pokemon.name}/>
            </div>
            <div className='h-12 bg-gray-50'>
                <h2 className='text-center font-bold m-auto text-lg'>{pokemon.name}</h2>
            </div>
        </div>
    </Link>
  )
}

export default Card