'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

function Header() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  async function getPokemons() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=15');
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  }

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    try {
      const pokemons = await getPokemons();
      const filteredSuggestions = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error('Pokémon listesi alınırken bir hata oluştu:', error);
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/${inputValue}`;
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div className='bg-gray-700 flex justify-evenly'>
      <Link href={"/"} className='flex justify-center h-full'>
        <Image src={'/images/25.png'} width={60} height={60} alt='pikachuuuu' />
        <span className='self-center text-yellow-400 text-lg'>Home</span>
      </Link>
      <div className='flex'>

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
        {inputValue.length &&suggestions.length > 0 && (
          <div className="suggestions absolute bg-gray-200 w-48 mt-16 rounded-md shadow-lg mx-4 z-10 ">
            <ul>
              {suggestions.map((pokemon) => (
                <li
                  key={pokemon.name}
                  className="cursor-pointer p-2 hover:bg-gray-300"
                  onClick={() => handleSuggestionClick(pokemon.name)}
                >
                  {pokemon.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;