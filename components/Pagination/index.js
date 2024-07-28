"use client"
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
function Pagination() {
    const router = useRouter()
    const searchParams = useSearchParams()
    
    const page = searchParams.get('page') ?? '1'
    return (
        <div className='flex my-6 '>
            <div className='mx-auto'>
                <button
                    className={`m-1  font-bold text-gray-950 p-2 rounded ${page==1? "pointer-events-none bg-gray-500":"bg-yellow-500"}`}
                    
                    onClick={() => {
                    router.push(`/?page=${Number(page) - 1}`)
                    }}>
                    prev page
                </button>

     

                <button
                    className={`mx-auto bg-yellow-500 font-bold text-gray-950 p-2 rounded ${page==87? "pointer-events-none bg-gray-500":"bg-yellow-500"}`}
                    
                    onClick={() => {
                    router.push(`/?page=${Number(page) + 1}`)
                    }}>
                    next page
                </button>
            </div>
        
        </div>
    )
}

export default Pagination