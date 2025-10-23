"use client"
import React from 'react'
import CountUp from 'react-countup'

function StatsCount() {
    return (
        <div className='max-w-7xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-fodBlue'><CountUp end={10000} enableScrollSpy />+</h3>
                <p className='text-xl font-semibold text-fodOrange text-center'>Happy Travelers</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-fodBlue'><CountUp end={500} enableScrollSpy />+</h3>
                <p className='text-xl font-semibold text-fodOrange text-center'>Successfull Trips</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-fodBlue'><CountUp end={200} enableScrollSpy />+</h3>
                <p className='text-xl font-semibold text-fodOrange text-center'>Destinations</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-fodBlue'><CountUp end={5} enableScrollSpy />+</h3>
                <p className='text-xl font-semibold text-fodOrange text-center'>Years Of Experience</p>
            </div>
        </div>
    )
}

export default StatsCount