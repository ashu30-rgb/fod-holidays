import React from 'react'
import PackageHero from './_components/PackageHero'
import PackageTitle from './_components/PackageTitle'
import PlacesCovered from './_components/PlacesCovered'
import IncExcl from './_components/IncExcl'
import Policy from './_components/Policy'
import Stats from './_components/Stats'
import { MAIN_DATA } from '@fod/constants/data'
import PricingOptions from './_components/PricingOptions'
import RelatedTrips from './_components/RelatedTrips'

const PackageDetails =  ({ params }: { params: { id: string } }) => {
    const id =  parseInt(params.id[0])
    const data = MAIN_DATA.find((data) => data.id === id)
    if (!data) {
        return
    }
    return (
        <div className='bg-white '>
            <section className="w-full ">
                <PackageHero data={data} />
            </section>
            <section className='p-4 '>
                <div className="w-full max-w-7xl mx-auto">
                    <PackageTitle data={data} />
                </div>
            </section>
            <section className='p-4'>
                <div className="w-full max-w-7xl mx-auto">
                    <PlacesCovered data={data} />
                </div>
            </section>
            <section className='p-4'>
                <div className="w-full max-w-7xl mx-auto">
                    <PricingOptions data={data} />
                </div>
            </section>
            <section className='p-4 py-8 md:p-8'>
                <div className="w-full max-w-7xl mx-auto">
                    <IncExcl data={data} />
                </div>
            </section>
            <section className='p-4 py-8 md:p-8'>
                <div className="w-full max-w-7xl mx-auto">
                    <Stats />
                </div>
            </section>
            <section className='p-4 py-8 md:p-8'>
                <div className="w-full max-w-7xl mx-auto">
                    <Policy />
                </div>
            </section>
            <section className='p-4 py-8 md:p-8 '>
                <div className="w-full max-w-7xl mx-auto">
                    <RelatedTrips id={id} />
                </div>
            </section>
        </div>
    )
}

export default PackageDetails