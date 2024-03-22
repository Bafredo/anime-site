import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='overflow-hidden mt-20'>
        <div className='flex bg-slate-200 h-[87vh] w-screen overflow-hidden items-center justify-center'>
        <div className='h-[400px] w-[90%] flex bg-white rounded-[30px] shadow-md'>
            <div className='basis-1/2 bg-indigo-900 text-white flex flex-col justify-center items-center rounded-l-[30px] rounded-br-[60px] rounded-tr-[90px] '>
                <h1 className='text-3xl text-center font-bold'>Hello!! 👋 and welcome😁</h1>
                <p className='text-center mt-4'>Register and get access to limitless content</p>
                <p className='text-center mt-4 text-[10px]'>Already have an account?</p>
                <button className='mt-1 p-2 bg-white text-indigo-950 rounded-xl w-[90px]' onClick={() => navigate('/login')}>Login</button>
            </div>

            <div className='basis-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold'>Create account</h1>
                
                <form className='mt-1 flex flex-col w-[100%] items-center justify-center'>
                <p className='text-center'>or Sign-up with email</p>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="text" placeholder='First name' />
                    </div>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="text" placeholder='Last name' />
                    </div>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="email" placeholder='Email' />
                    </div>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="password" placeholder='Password' />
                    </div>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="password" placeholder='Re-type password' />
                    </div>
                    <div>
                    <button className='mt-5 p-2 bg-indigo-900 text-white rounded-xl w-[90px]'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login