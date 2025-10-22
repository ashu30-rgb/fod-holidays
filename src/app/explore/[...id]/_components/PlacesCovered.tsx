"use client"
import { MainDataType } from '@fod/constants/types';
import Stepper from '@keyvaluesystems/react-stepper'
import { Images } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const styles = {
    LineSeparator: () => ({
        backgroundColor: "#fc5b0b",
    }),
    CompletedNode: () => ({
        backgroundColor: "#fc5b0b",
        height: 30,
        width: 30,
        fontSize: 50
    }),
    LabelTitle: () => ({
        fontSize: 20,
        fontWeight: 400,
        marginLeft: 8,
        textAlign:"left"
    }),

};

function PlacesCovered({ data }: { data: MainDataType }) {

    const STEP_ARRAY = data.places_covered.map((item) => {
        return {
            stepLabel: item,
            stepDescription: "",
            completed: true,
        }
    })
    return (
        <div className='border rounded-xl p-4 '>
            <div className='flex gap-10 justify-between'>
                <div>

                    <h2 className='text-2xl font-bold text-fodBlue title-underline-orange mb-2'>Places to be covered</h2>
                    <Stepper
                        steps={STEP_ARRAY}
                        currentStepIndex={5}
                        styles={styles}
                    />
                </div>
                <div className='w-3/4 flex gap-2 rounded-xl'>
                    <div className='w-1/2 hidden md:block'>
                        <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt="destination image" className='w-full h-auto rounded-l-xl' height={100} width={100} />
                    </div>
                    <div className='grid grid-cols-2 gap-2 md:w-1/2'>
                        <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt="destination image" className='w-full h-auto' height={100} width={100} />
                        <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt="destination image" className='w-full h-auto rounded-tr-xl' height={100} width={100} />
                        <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt="destination image" className='w-full h-auto' height={100} width={100} />
                        <div className='relative'>
                            <Image src="https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg" alt="destination image" className='w-full h-auto rounded-br-xl brightness-75' height={100} width={100} />
                            <div className='absolute bottom-4 right-4'>
                                <button className='bg-white p-1 px-2 rounded font-medium flex gap-2 text-sm items-center'><Images size={18} />All Images</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacesCovered