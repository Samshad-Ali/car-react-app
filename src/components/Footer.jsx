import React, { useState } from 'react'
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate=useNavigate();
  const [count,setCount] = useState(1);
  const handleDecrementBtn=()=>{
    if(count==1){
      navigate('/')
    }
    if(count>1)
    {
      setCount(count-1)
      navigate(`/page/${count}`)
    }
  }
  const handleIncrementBtn=()=>{
    if(count==1){
      navigate('/')
    }
    if(count<10)
    {
      setCount(count+1)
      navigate(`/page/${count}`)
    }
  }
  return (
    <footer className='w-11/12 h-12 rounded-xl shadow-sm shadow-gray-400 bg-gray-100 flex justify-between items-center px-4 py-2'>
        <p className='text-sm'>{`${count} of 10`}</p>
        <div className='flex gap-4 items-center'>
          <button
          onClick={handleDecrementBtn}
          className='bg-white rounded-lg w-6 h-6 shadow-sm grid items-center justify-center shadow-slate-500 font-semibold'>
            <HiArrowSmLeft/>
          </button>
<p className='bg-white rounded-lg w-6 h-6 shadow-sm grid items-center justify-center shadow-slate-500 font-semibold text-xs'>{count}</p>
<button
onClick={handleIncrementBtn}
 className='bg-white rounded-lg w-6 h-6 shadow-sm grid items-center justify-center shadow-slate-500 font-semibold'>
  <HiArrowSmRight/>
</button>
        </div>
    </footer>
  )
}

export default Footer