import React from 'react';
import Card from '../components/Card'
import Pagination from "../components/Pagination"
async function getPokemons(start){
  try{
    const response =await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${start}`)
  
    return response.json();
  }
  catch(err){
    throw new Error(err);
  }
  
}
export default async function Home({searchParams}){
  const page = searchParams['page'] ?? '1';
  const per_page = 15;
  const start = (Number(page) - 1) * Number(per_page);

  
  const{results}= await getPokemons(start);
  
  return (
    <div>
      <h1 className='text-center font-bold text-3xl py-6'>Pokemon World</h1>
      <div className="lg:container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 p-4 py-6">
      
        {
          results.map((pokemon,index)=>
              <Card key={index} pokemon={pokemon}/>
          )
        }
      
      </div>
      <Pagination/>
    </div>
    
  );
}
