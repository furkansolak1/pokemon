import React from 'react';
import Card from '../components/Card'
import Pagination from "../components/Pagination"
import Header from "../components/Header"
import axios from 'axios';
async function getPokemons(start){
  try{
    const response =await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${start}`)
  
    return response.json();
  }
  catch(err){
    throw new Error(err);
  }
  
}
// async function getPokemonsAll(start){
//   try{
    
//     const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0');
//     return res.json();
//   }
//   catch(err){
//     throw new Error(err);
//   }
  
// }
export default async function Home({searchParams}){
  
  const page = searchParams['page'] ?? '1';
  const per_page = 15;
  const start = (Number(page) - 1) * Number(per_page);

  
  const{results}= await getPokemons(start);
 
  
  // const pokemonAll=await getPokemonsAll();
  

  return (
    <div>
      <h1 className='text-center font-bold text-3xl py-6'>Pokemon World</h1>
      <div className="lg:container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 p-4 py-6">
      
        {
          results.map((pokemon,index)=>
              <Card key={index} pokemon={pokemon}/>
          )
        }
        {
          
              // <Header  pokemons={pokemonAll.results}/>
          
        }
      
      
      </div>
      <Pagination/>
    </div>
    
  );
}
