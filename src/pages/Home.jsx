import React, { useEffect, useState } from 'react'
import Car_Card from '../components/Car_Card'
import { getData } from '../redux/slice/carSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch=useDispatch();
  const data = useSelector(state=>state.carReducer.data)
  useEffect(()=>{
   dispatch( getData())
  },[])
  return (
    <div className='w-11/12 min-h-screen flex flex-wrap justify-between items-center'>
      {
        data.length>0 ?
        data?.map((item,id)=>{
          return <Car_Card data={item} key={id} />
        })
        :
        <div className=' w-full min-h-screen flex justify-center items-center'>

        <p className='text-red-500 text-3xl font-bold'>Car not Found</p>
        </div>
      }
    </div>
  )
}

export default Home