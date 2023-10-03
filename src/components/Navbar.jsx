import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import { onSearchData } from "../redux/slice/carSlice";
const Navbar = () => {
  const [inputValue,setInputValue]=useState(null)
  const dispatch= useDispatch();
  const handleSearchBtn=()=>{
    try {
      dispatch(onSearchData(inputValue))
    } catch (error) {
    }finally{
      setInputValue('')
    }
  }
  return (
    <nav className="w-11/12 h-12 rounded-xl shadow-sm shadow-gray-400 bg-gray-100 flex justify-start items-center px-4 py-2">
        <ul className="flex gap-5 justify-center items-center text-gray-600">
            <div className="flex bg-white text-sm p-1 px-3 rounded-xl items-center">
          <input onChange={(e)=>{setInputValue(e.target.value)}} className="flex-1 outline-none bg-transparent font-semibold " type="text" placeholder="Car name..."/>
          <button className="grid items-center justify-center text-gray-600 font-bold text-lg"
          onClick={handleSearchBtn}
          >
            <FiSearch />
          </button>
            </div>
          <li className="flex gap-1 items-center font-semibold text-sm font-sans justify-center">
            Relevance
            <span className="grid items-center text-xs">
              <FaAngleDown />
            </span>
          </li>
          <li className="flex gap-1 items-center font-semibold text-sm font-sans justify-center">
            All brands
            <span className="grid items-center text-xs">
              <FaAngleDown />
            </span>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
