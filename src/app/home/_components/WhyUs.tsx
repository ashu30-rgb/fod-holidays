import StatsCount from '@fod/app/_components/StatsCount';
import { Plane } from 'lucide-react'
import React from 'react'

function WhyUs() {
    return (
        <div className='pt-16'>
            <div className='max-w-7xl mx-auto mb-16'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-fodBlue title-underline-orange'>Why Choose Us</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-fodBlue'>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Plane size={60} color='black' />
                        <h3 className='text-xl font-bold'>Tour Supports</h3>
                        <p className='text-center text-xs'>The digital-first world demands businesses to operate in a
                            whole new way to achieve their objectives. The digital-first world demands businesses to operate in a whole new way to achieve their objectives.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Plane size={60} color='black' />
                        <h3 className='text-xl font-bold'>Tour Supports</h3>
                        <p className='text-center text-xs'>The digital-first world demands businesses to operate in a
                            whole new way to achieve their objectives. The digital-first world demands businesses to operate in a whole new way to achieve their objectives.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Plane size={60} color='black' />
                        <h3 className='text-xl font-bold'>Tour Supports</h3>
                        <p className='text-center text-xs'>The digital-first world demands businesses to operate in a
                            whole new way to achieve their objectives. The digital-first world demands businesses to operate in a whole new way to achieve their objectives.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Plane size={60} color='black' />
                        <h3 className='text-xl font-bold'>Tour Supports</h3>
                        <p className='text-center text-xs'>The digital-first world demands businesses to operate in a
                            whole new way to achieve their objectives. The digital-first world demands businesses to operate in a whole new way to achieve their objectives.</p>
                    </div>
                </div>

            </div>
            <div className='bg-fodOrange/10 p-10'>
                <StatsCount />
            </div>
        </div>
    )
}

export default WhyUs