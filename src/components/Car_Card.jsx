import React from "react";
import { SlPeople } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFuelPumpDiesel, BsSpeedometer } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
const Car_Card = ({ data }) => {
  const {
    name,
    img,
    year,
    numberOfSeat,
    oilType,
    average,
    driveType,
    priceInEmi,
    priceEmiTerm,
  } = data;
  return (
    <div className=" my-4 w-96 flex flex-col gap-2 rounded-xl shadow-sm shadow-gray-400 bg-white border-white border p-2 px-3">
      <div className="upper-section w-full">
        <img className="rounded-xl h-48 w-full" src={img} alt="car-photo" />
      </div>
      <div className="lower-section flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-black font-semibold">{name}</p>
          <p className="border border-blue-500 border-dashed rounded-lg px-2 text-sm font-semibold">
            {year}
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 border-b border-gray-300 py-3">
          <p className="flex items-center gap-1 text-sm">
            <span className="text-blue-500">
              <SlPeople />
            </span>
            {numberOfSeat}
          </p>
          <p className="flex items-center gap-1 text-sm">
            <span className="text-blue-500">
              <BsFuelPumpDiesel />
            </span>
            {oilType}
          </p>
          <p className="flex items-center gap-1 text-sm">
            <span className="text-blue-500">
              <BsSpeedometer />
            </span>
            {average}
          </p>
          <p className="flex items-center gap-1 text-sm">
            <span className="text-blue-500">
              <PiSteeringWheelBold />
            </span>
            {driveType}
          </p>
        </div>
        <div className="flex justify-between items-center font-bold">
          <p>
            {priceInEmi} <span className="text-xs">{priceEmiTerm}</span>
          </p>
          <div className="flex gap-2 items-center py-2">
            <span className="bg-blue-200 text-blue-500 text-lg rounded-xl p-2">
              <AiOutlineHeart />
            </span>
            <button className="cursor-pointer bg-blue-500 text-white rounded-lg px-2 py-2 text-sm">
              Rate now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car_Card;
