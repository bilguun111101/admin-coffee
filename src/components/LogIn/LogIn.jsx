import Circles from '../Circles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLayout } from '../../context';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircleFill } from "react-icons/bs";


export const LogInSection = () => {
    const navigate = useNavigate();
    const { setRemove } = useLayout();
    const [email, setEmail] = useState("");
    const { register, handleSubmit } = useForm();
    const handleImpormation = (event) => {
        if(!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || !event.password) return;
    }
    const back_to_page = () => {
      setRemove(false);
      navigate('/')
    }
  return (
    <div className='w-full h-full flex items-center justify-center overflow-hidden backdrop-blur relative'>
      <Circles />
      <button 
        className='absolute flex items-center justify-center text-white cursor-pointer hover:opacity-90 duration-200 active:opacity-70' 
        style={{ left: 30, top: 30 }}
        onClick={back_to_page}
      >
        <BsArrowLeftCircleFill size={40} />
      </button>
      <form onSubmit={handleSubmit(handleImpormation)} className="z-10">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input { ...register("firstName") } type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        </div>
        <div class="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div> 
        <div class="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input { ...register("password") } type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Enter" />
        <div className='flex items-center mt-4'>
          <p className='text-white'>or</p>
          &nbsp;
          <a href="/signup" className='text-white underline'>sign up</a>
        </div>
      </form>
    </div>
  )
}
