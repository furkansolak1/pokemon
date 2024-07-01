import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center mt-6'>
      <h2 className='my-3 text-3xl font-bold'>Not Found</h2>
      <p className='my-3'>Could not find requested pokemon</p>
      <Link className='my-3 text-yellow-400 text-lg' href="/">Return Home</Link>
    </div>
  )
}