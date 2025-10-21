import React from 'react'
import TripCard from '../_components/TripCard';
import {MAIN_DATA} from "@fod/constants/data"
import { MainDataType } from '@fod/constants/types';

const Explore=()=> {
  return (
    <div className='min-h-screen p-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-cente'>
        {MAIN_DATA.map((data:MainDataType)=>(
            <TripCard key={data.id} data={data}/>
        ))}
        </div>
    </div>
  )
}

export default Explore;