import { IndianRupee, MapPin, MoveRight } from 'lucide-react'
import React from 'react'

function SearchBar() {
    return (
        <div className='w-full p-6 lg:px-12 gap-6 lg:gap-10 bg-gray-100 rounded-lg shadow drop-shadow flex flex-col lg:flex-row items-center'>
            <div className='flex flex-col lg:flex-row gap-4 w-full'>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="destination" className='text-xs font-semibold'>Destination</label>
                    <div className='flex gap-2 items-center bg-white rounded-lg px-4'>
                        <MapPin size={18} />
                        <input type="text" placeholder='Where do you want to travel?' id='destination' className='min-h-10 fod-input w-full' />
                    </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="budget" className='text-xs font-semibold'>Budget</label>
                    <div className='flex gap-2 items-center bg-white rounded-lg px-4'>
                        <IndianRupee size={18} />
                        <input type="text" placeholder='Budget' id='Budget' className='min-h-10 fod-input' />
                    </div>
                </div>
            </div>
            <button className='btn-primary font-semibold'>Search
                <MoveRight />
            </button>
        </div>
    )
}

export default SearchBar