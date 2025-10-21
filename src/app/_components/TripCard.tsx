import { MainDataType } from '@fod/constants/types'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TripCard = ({data}:{data:MainDataType}) => {
    return (
        <div className="bg-white w-[360px]  md:w-96 rounded-3xl font-source-sans border-2 border-fodOrange/50">
            <div className="relative">
                <Image
                    className="rounded-3xl h-52 object-cover "
                    src={"https://images.pexels.com/photos/20889591/pexels-photo-20889591.jpeg"}
                    alt="medical clinics, medical centre, clinic near, medicine care"
                    width={384}
                    height={283}
                />
                <div className="bg-fodOrange/90 p-1.5 px-12 inline-block absolute right-0 bottom-0 rounded-br-3xl rounded-tl-3xl font-semibold text-base text-white">
                   &#8377; {data.prices[0].price}
                </div>
            </div>
            <div className="p-6">
                <div className="flex flex-col gap-4 h-full">
                    <Link href="/id" className="font-semibold text-2xl min-h-16 text-wrap hover:text-primaryBlue hover:underline">
                       {data.name}
                    </Link>


                    <span className="flex gap-2 text-base text-[#808080] font-semibold mb-2">
                        <MapPin />
                        Citry
                    </span>

                    <div className="grid grid-cols-4 gap-4 mb-1">
                        {new Array(8).fill(8).map((item,index)=>(
                        <div
                        key={index}
                            className="flex flex-col gap-2 items-center h-24"
                            style={{ maxWidth: '80px' }}
                        >
                           <MapPin />
                            <span className="text-[10px] md:text-xs leading-none text-center break-words h-10">
                                {"item"+index}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-black border-dotted pt-6 text-center">
                    {/* <Link href={`/clinics/${data?.id}/${data.clinic_name.replace(/ /g, '')}${isEdit ? "/edit" : ""}`} > */}
                    <Link href={`/explore/${data?.id}`}>
                        <button className="card-button">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default TripCard