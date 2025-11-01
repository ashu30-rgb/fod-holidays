"use client"
import { MoveRight } from 'lucide-react'
import React from 'react'
import VideoSection from './Video'
import { ReactTyped } from 'react-typed'
import SearchBar from '@fod/app/_components/SearchBar'
import Link from 'next/link'

function Hero() {
    return (
        <div className='relative '>
            <div className='h-full relative'>
                <VideoSection />
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black/50 h-full flex justify-center">
                <div className='w-full h-full lg:w-3/5 flex flex-col gap-2 md:gap-4 justify-center items-center text-white'>
                    <h1 className="text-2xl md:text-7xl font-extrabold">
                        Explore. Book. Travel.
                    </h1>
                    <div className='text-2xl md:text-7xl font-bold text-fodOrange min-h-8 md:min-h-20'>
                        <ReactTyped showCursor={false} strings={["Adventure", "Honeymoon", "Explorations", "Mountains", "Valleys", "Beaches", "Trekking", "Memories"]} typeSpeed={51} backSpeed={21} loop />
                    </div>

                    <p className='text-sm md:text-lg lg:text-2xl text-center'>Your next adventure is just a click away - discover destinations, compare deals, and start your journey with us</p>
                    <Link href='/explore' className='btn-primary mt-8 cursor-pointer'>Start Tour
                        <MoveRight />
                    </Link>
                </div>
            </div>
            </div>
            <div className='max-w-7xl w-full lg:absolute lg:-bottom-10 z-20 lg:left-1/2 lg:transform lg:-translate-x-1/2'>
                <SearchBar />
            </div>
        </div>
    )
}

export default Hero