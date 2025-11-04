import { MainDataType } from '@fod/constants/types'
import { CircleCheckBig, X } from 'lucide-react'
import React from 'react'

function IncExcl({data}:{data:MainDataType}) {
    return (
        <div className='border rounded-xl p-4 '>
            <h2 className=" text-2xl font-semibold border-b pb-4">What's inside the package?</h2>
            <div className='md:flex'>
                <div className='p-2 border-b md:border-b-0 md:border-r mt-2 md:w-1/2'>
                    <h3 className=" text-xl font-semibold">Inclusions</h3>
                    <ul className='mt-4 space-y-2'>
                        {data.inclusions.map((item,index)=>(
                        <li key={index} className='flex gap-2 items-center'>
                            <CircleCheckBig className='text-green-500' />
                            {item}
                        </li>
                        ))}
                    </ul>
                </div>
                <div className='p-2 mt-2 md:w-1/2 md:ps-4'>
                    <h3 className=" text-xl font-semibold">Exclusions</h3>
                    <ul className='mt-4 space-y-2'>
                        {data.exclusions.map((item,index)=>(
                        <li key={index} className='flex gap-2 items-center'>
                            <X className='text-red-500' />
                            {item}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default IncExcl