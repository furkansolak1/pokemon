import React from 'react'
import Link from 'next/link';
function Footer() {
  return (
    <footer className="bg-gray-500  text-center pt-4">
      Made with by&nbsp;
      <Link className='border-b hover:border-yellow-500 border-b-2 text-white' href="https://www.linkedin.com/in/furkan-solak-6b8a8a234" target="_blank">
        Furkan SOLAK
      </Link>
    </footer>
  )
}

export default Footer

