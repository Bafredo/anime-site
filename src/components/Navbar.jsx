import React  from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='z-10 flex fixed w-full top-0 justify-between bg-black text-white p-4 h-20 items-center'>
        <h1 className='text-xl font-bold basis-1/5 cursor-pointer' onClick={() => { navigate('/') }}>WunderFlix</h1>
        <form className='mx-1 bg-gray-900 p-2 basis-3/5 flex align-center justify-center'>
            <input className='outline-none bg-gray-800 w-full px-4' type='text' placeholder='Search anime'/>
            <button className='mx-1 border-stone-500 border-double px-1'>Filter</button>
        </form>

        <div className='basis-1/5 flex justify-end'>
        <button onClick={() => { navigate('/Login')}} className='bg-blue-900 hover:bg-blue-700 text-white text-sm text-center px-4 py-2 rounded-xl'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar