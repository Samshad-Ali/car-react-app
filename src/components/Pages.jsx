import React from 'react'
import { useSelector } from 'react-redux'
import Car_Card from './Car_Card'
const Pages = () => {
  const data = useSelector(state=>state.carReducer.data)
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

export default Pages