import React from 'react'
import ContactUs from '../_components/ContactUs'

function page() {
  return (
            <>
            <div id="about" className="relative head-top min-h-[60vh] bg-black text-white flex justify-center items-center">
                <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
                <div  className='relative max-w-6xl mx-auto'>
                    <div className='text-3xl md:text-[4rem] xl:text-[6rem] font-semibold blend mb-6 xl:mb-12 text-center '>Frequently Asked Questions</div>
                    <div className='md:flex justify-end'>
                        <div className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>Your travel doubts, answered! From booking details to trip experiences — here’s everything you need to know before you set out on your next adventure with us.</div>
                    </div>
                </div>
            </div>
            <section>
                
            </section>

            <ContactUs/>
        </>
  )
}

export default page