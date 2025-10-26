import { MainDataType } from '@fod/constants/types'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TripCard = ({ data }: { data: MainDataType }) => {
    return (
        <div className="bg-white w-[360px] md:w-96 rounded-3xl font-source-sans border-2 border-fodOrange/50">
            <div className="relative">
                <Image
                    className="rounded-3xl h-72 object-cover "
                    src={data.images[0]||""}
                    alt="medical clinics, medical centre, clinic near, medicine care"
                    width={384}
                    height={283}
                />
                <div className="bg-fodOrange/90 p-1.5 px-12 inline-block absolute right-0 bottom-0 rounded-br-3xl rounded-tl-3xl font-semibold text-base text-white">
                    &#8377; {data.prices[0].price}/-
                </div>
            </div>
            <div className="p-6">
                <div className="flex flex-col gap-1 h-full">
                    <span className="text-sm text-[#808080]">
                        {data.duration.day} Days & {data.duration.night} Nights
                    </span>

                    <Link href={`/explore/${data?.id}`} className="font-semibold text-2xl text-wrap hover:text-fodOrange hover:underline mb-4">
                        {data.name}
                    </Link>


                    <div className="flex gap-2 mb-6 text-sm">
                        <MapPin />
                        <div>
                            {data.places_covered.map((item, index) => (
                                <span key={index}>{item}{index !== data.places_covered.length - 1 && ","} </span>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-300 border-dashed pt-6 text-center flex gap-2">
                    <Link className='w-1/2' href={`/explore/${data?.id}`}>
                        <button className="card-button w-full !bg-transparent border border-fodOrange !text-fodOrange">
                            View
                        </button>
                    </Link>
                    <button className='card-button whitespace-nowrap w-1/2'>
                        Book Now
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TripCard