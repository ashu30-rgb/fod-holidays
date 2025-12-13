import StatsCount from '@fod/app/_components/StatsCount';
import Image from 'next/image';
import React from 'react';
import STATS1 from "@fod/assets/icons/stats1.svg"
import STATS2 from "@fod/assets/icons/stats2.svg"
import STATS3 from "@fod/assets/icons/stats3.svg"

function WhyUs() {
    return (
        <div className='pt-16 '>
            <div className='max-w-7xl mx-auto mb-12 p-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-fodBlue title-underline-orange'>Why Choose Us</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-fodBlue'>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Image src={STATS1.src} alt='plane icon' width={90} height={91} />
                        <h3 className='text-xl font-bold'>Personalized Travel Plans</h3>
                        <p className='text-center text-xs'>Every traveler has a different heartbeat. We listen, understand your vibe, and craft journeys that feel made for you, not pulled from a shelf.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Image src={STATS2.src} alt='plane icon' width={90} height={91} />
                        <h3 className='text-xl font-bold'>Hassle-Free Experience</h3>
                        <p className='text-center text-xs'>From planning to booking to on-ground support, we handle the chaos so you can enjoy the calm. No stress, no confusion, just smooth travel.
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Image src={STATS3.src} alt='plane icon' width={90} height={91} />
                        <h3 className='text-xl font-bold'>Trusted and Transparent
                        </h3>
                        <p className='text-center text-xs'>Clear pricing, honest communication, and reliable service. You always know what you're getting, and you always get what you were promised.
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Image src={STATS2.src} alt='plane icon' width={90} height={91} />
                        <h3 className='text-xl font-bold'>24/7 Travel Assistance
                        </h3>
                        <p className='text-center text-xs'>Journeys can surprise you. We stay connected round the clock to guide, support, and solve so your trip stays on track, no matter what.</p>
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