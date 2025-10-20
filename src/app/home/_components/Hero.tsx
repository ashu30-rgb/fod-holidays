import { IndianRupee, MapPin, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='relative'>
            <Image src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542607-singapore.jpg" alt='Home' width={200} height={100} className='w-screen' />

            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black/50 h-full flex justify-center">
                <div className='w-full h-full lg:w-3/5 flex flex-col gap-4 justify-center items-center text-white'>
                    <h1 className="text-7xl font-extrabold">
                        Explore. Book. Travel.
                    </h1>
                    <p className='text-2xl text-center'>Your next adventure is just a click away - discover destinations, compare deals, and start your journey with us</p>
                    <button className='btn-primary mt-8'>Start Tour
                        <MoveRight />
                    </button>
                </div>
            </div>
            <div className='max-w-7xl w-full absolute p-6 px-12 gap-10 bg-gray-100 -bottom-10 z-20 rounded-lg shadow drop-shadow left-1/2 transform -translate-x-1/2 flex items-center'>
                <div className='flex gap-4 w-full'>
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
        </div>
    )
}

export default Hero