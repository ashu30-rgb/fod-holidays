import React from 'react'
import ContactUs from '../_components/ContactUs'
import FaqAccordion from './_components/FaqAccordion'
import { FAQ_DATA } from '@fod/constants/data'

function page() {
    return (
        <>
            <div id="about" className="relative head-top min-h-[60vh] bg-black text-white flex justify-center items-center">
                <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
                <div className='relative max-w-6xl mx-auto'>
                    <div className='text-3xl md:text-[4rem] xl:text-[6rem] font-semibold blend mb-6 xl:mb-12 text-center '>Frequently Asked Questions</div>
                    <div className='md:flex justify-end'>
                        <div className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>Your travel doubts, answered! From booking details to trip experiences — here’s everything you need to know before you set out on your next adventure with us.</div>
                    </div>
                </div>
            </div>
            <section className='p-4 py-16'>
                <div className="w-full max-w-7xl mx-auto">
                    <div className='w-full text-center space-y-4 mb-4'>
                        <h2 className="text-3xl font-bold text-fodBlue title-underline-orange after:bg-whited">General Questions</h2>
                        <p>A quick guide to help you understand how our trips work, what’s included, and how we make travel easy for you.</p>
                    </div>
                    <FaqAccordion data={FAQ_DATA.generalQuestions} />
                </div>
            </section>
            <section className='p-4'>
                <div className="w-full max-w-7xl mx-auto">
                    <div className='w-full text-center space-y-4 mb-4'>
                        <h2 className="text-3xl font-bold text-fodBlue title-underline-orange after:bg-whited">Frequently Asked Travel Questions</h2>
                        <p>Got travel-specific queries? Here are some of the most common questions from our happy explorers.</p>
                    </div>
                    <FaqAccordion data={FAQ_DATA.frequentlyAskedQuestions} />
                </div>
            </section>

            <ContactUs />
        </>
    )
}

export default page