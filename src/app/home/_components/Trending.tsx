"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const OPTIONS = [
    {
        title: "International Trips",
        value: "international"
    },
    {
        title: "Domestic Trips",
        value: "domestic"
    },
    {
        title: "Honeymoon Trips",
        value: "honeymoon"
    },
    {
        title: "Beach Trips",
        value: "beach"
    },
    {
        title: "Wildlife Trips",
        value: "wildlife"
    },
    {
        title: "Bike Trips",
        value: "bike"
    },
    {
        title: "Mountain Trips",
        value: "mountain"
    },
]

function Trending() {
    const [type, setType] = useState(OPTIONS[0].value)
    return (
        <div className='bg-fodOrange py-16'>
            <div className='max-w-7xl mx-auto mb-16'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-fodBlue title-underline-orange after:bg-white'>Trending</h2>
                    <p className='text-2xl mt-4 font-light text-fodBlue/60'>Here's What We Are Offering</p>
                </div>

                <div className='flex gap-4 items-start justify-between overflow-auto mt-8'>
                    {OPTIONS.map((trip,index) => (
                        <div key={index} className={`text-lg font-semibold p-2 px-4 rounded-xl whitespace-nowrap transition-all duration-500 ${trip.value === type ? "bg-white text-fodOrange cursor-default" : "text-white/70 cursor-pointer"}`} onClick={() => setType(trip.value)}>{trip.title}</div>
                    ))}
                </div>

                <div className='flex gap-4 flex-wrap mt-10 justify-between'>
                    <div className='relative w-fit h-72 rounded-xl'>
                        <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full h-full rounded-xl' height={100} width={100} />
                    </div>
                    <div className='relative w-fit h-72 rounded-xl'>
                        <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full h-full rounded-xl' height={100} width={100} />
                    </div>
                    <div className='relative w-fit h-72 rounded-xl'>
                        <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full h-full rounded-xl' height={100} width={100} />
                    </div>
                    <div className='relative w-fit h-72 rounded-xl'>
                        <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full h-full rounded-xl' height={100} width={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending