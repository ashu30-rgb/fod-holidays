import { FaBus } from "react-icons/fa";
import React from 'react'
import { Camera, Hotel, Utensils } from "lucide-react";
import { MainDataType } from "@fod/constants/types";

function PackageTitle({data}:{data:MainDataType}) {
    return (
        <div className="flex gap-8 p-4 border rounded-xl">
            <div className="flex flex-col gap-6 border-r pe-4 w-2/3">
            <div className="flex gap-4 items-end mb-2">
                <h1 className='text-5xl font-bold text-fodBlue title-underline-orange after:w-[20%] w-fit'>{data.name}</h1>
                <div>
                <span className='bg-fodOrange p-2 px-4 rounded-full text-white  font-semibold w-max'>
                   {data.duration.day}D &  {data.duration.night}N
                </span>
                </div>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem suscipit commodi doloremque eius? Temporibus neque maiores officiis quod voluptatum optio, illum dolores nesciunt provident modi sunt sint possimus magni doloremque.</p>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Package Includes</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-semibold">
                    <div className='flex gap-4 text-lg items-center bg-fodOrange/5 p-4 rounded-lg min-w-44 shadow'>
                        <FaBus className='text-fodOrange' size={25} />
                        <span>
                            Tranport
                        </span>
                    </div>
                    <div className='flex gap-4 text-lg items-center bg-fodOrange/5 p-4 rounded-lg min-w-44 shadow'>
                        <Hotel className='text-fodOrange' size={25} />
                        <span>
                            Hotel
                        </span>
                    </div>
                    <div className='flex gap-4 text-lg items-center bg-fodOrange/5 p-4 rounded-lg min-w-44 shadow'>
                        <Utensils className='text-fodOrange' size={25} />
                        <span>
                            Meals
                        </span>
                    </div>
                    <div className='flex gap-4 text-lg items-center bg-fodOrange/5 p-4 rounded-lg min-w-44 shadow'>
                        <Camera className='text-white' fill="#fc5b0b" size={25} />
                        <span>
                            Sightseeing
                        </span>
                    </div>
                </div>
            </div>
            </div>
            <div className="p-4 w-1/3 border rounded-xl shadow-lg drop-shadow-lg h-fit flex flex-col gap-2">
                <p>Starting From</p>
                <h3 className="text-4xl font-bold text-fodOrange">&#8377; {data.prices[0].price}/- </h3>
                <p className="text-fodOrange">Per {data.prices[0].isHoneyMoon?"Couple":"Person"}</p>
                <p>{data.duration.day} Days & {data.duration.night} Nights</p>
                <button className="btn-primary mt-4">Book Now</button>
            </div>
        </div>
    )
}

export default PackageTitle