import { notFound } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
async function getPokemon(idOrName){
  try{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    if (!response.ok) {
      return null;
    }

    return response.json()

  }
  catch(err){
    throw new Error(err);
  }
}

async function Page({params}) {
  const pokemon = await getPokemon(params.id)
  console.log(pokemon);
  if(!pokemon){
    notFound();
  }
 
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
  return (
    <div>
<div className='lg:container mx-auto lg:flex p-4 gap-4 my-6'>      
      <div className='left bg-indigo-50 lg:w-1/2 transition ease-in-out delay-500 lg:hover:origin-top-left lg:hover:rotate-3   border-2  m-0.5 rounded shadow-lg shadow-gray-600 p-3 mb-3'>
        
        <Image className='mx-auto' src={pokemon.sprites.front_default} width={150} height={150} alt={`${pokemon.name}Detail`}/>
        
        
        <h2 className='font-bold text-3xl text-center mt-3'>{pokemon.name}</h2>

        <div className='flex my-4 bg-indigo-50'>
          <h3 className='font-bold'>Pokemon Type: </h3>
          {
            pokemon.types.map(x=>
              <span className='mx-3'>{x.type.name}</span>
            )
          }
        </div>

        <div className='flex my-4'>
          <h3 className='font-bold'>Abilities: </h3>
          {
            pokemon.abilities.map(ability=>
              <span className='mx-3'>{ability.ability.name}</span>
            )
          }
        </div>

        
      </div>
      <div className='right bg-indigo-50 lg:w-1/2 transition ease-in-out delay-500 lg:hover:origin-top-right lg:hover:-rotate-3  border-2  m-0.5 rounded shadow-lg shadow-red-600 p-3 '>
            <h2 className='font-bold text-2xl text-center'>{pokemon.name} base stats</h2>
          {
             pokemon.stats.map(x=>
              <div className='flex my-auto p-4'>
                <h3 className='font-bold text-l'>{x.stat.name.toUpperCase()}:</h3>
                <span className='ms-3 text-l'>{x.base_stat}</span>

              </div>
            )
          }
      </div>
      <div>
      
      
    </div>
 
    </div>
          <div >
            <audio controls className='m-auto'>
            <source src={pokemon.cries.latest} type="audio/ogg" />
          </audio>
          </div>
      
    </div>
    
  )
}

export default Page