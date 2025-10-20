import Image from 'next/image'
import React from 'react'

function TopDestinations() {
  return (
    <div className='bg-fodOrange/10 pt-16 pb-2'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center'>
            <h2 className='text-3xl font-bold text-fodBlue title-underline-orange'>Top Destinations</h2>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-16 text-white'>
                <div className='relative w-full h-fit'>
                    <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full rounded' height={100} width={100}/>
                    <div className='absolute top-0 w-full h-1/3 bg-gradient-to-b from-fodBlue/40 to-transparent'/>
                    <div className='absolute top-4 left-4'>
                    <p className='title-underline text-xl font-semibold'>Thailand Tour Package</p>
                    </div>
                </div>
                <div className='relative w-full h-fit'>
                    <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full rounded' height={100} width={100}/>
                    <div className='absolute top-0 w-full h-1/3 bg-gradient-to-b from-fodBlue/40 to-transparent'/>
                    <div className='absolute top-4 left-4'>
                    <p className='title-underline text-xl font-semibold'>Thailand Tour Package</p>
                    </div>
                </div>
                <div className='relative w-full col-span-2 max-h-[300px] overflow-hidden'>
                    <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full rounded' height={100} width={100}/>
                    <div className='absolute top-0 w-full h-1/3 bg-gradient-to-b from-fodBlue/40 to-transparent'/>
                    <div className='absolute top-4 left-4'>
                    <p className='title-underline text-xl font-semibold'>Thailand Tour Package</p>
                    </div>
                </div>
                <div className='relative w-full h-fit'>
                    <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full rounded' height={100} width={100}/>
                    <div className='absolute top-0 w-full h-1/3 bg-gradient-to-b from-fodBlue/40 to-transparent'/>
                    <div className='absolute top-4 left-4'>
                    <p className='title-underline text-xl font-semibold'>Thailand Tour Package</p>
                    </div>
                </div>
                <div className='relative w-full h-fit'>
                    <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full rounded' height={100} width={100}/>
                    <div className='absolute top-0 w-full h-1/3 bg-gradient-to-b from-fodBlue/40 to-transparent'/>
                    <div className='absolute top-4 left-4'>
                    <p className='title-underline text-xl font-semibold'>Thailand Tour Package</p>
                    </div>
                </div>
                <div className='relative w-full col-span-2 max-h-[300px] overflow-hidden'>
                    <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt='Thailand' className='w-full rounded' height={100} width={100}/>
                    <div className='absolute top-0 w-full h-1/3 bg-gradient-to-b from-fodBlue/40 to-transparent'/>
                    <div className='absolute top-4 left-4'>
                    <p className='title-underline text-xl font-semibold'>Thailand Tour Package</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-[200px] font-extrabold text-fodBlue/10 -mb-20'>Destination</p>
    </div>
  )
}

export default TopDestinations