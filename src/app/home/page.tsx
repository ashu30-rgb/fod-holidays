import React from 'react'
import Hero from './_components/Hero';
import TopDestinations from './_components/TopDestinations';
import WhyUs from './_components/WhyUs';
import Trending from './_components/Trending';
import ContactUs from '../_components/ContactUs';

const Home=()=> {
  return (
    <div className=''>
      <Hero/>
      <TopDestinations/>
      <WhyUs/>
      <Trending/>
      <ContactUs/>
    </div>
  )
}

export default Home;