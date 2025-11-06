import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function ContactUs() {
    return (
        <div className='pt-16 p-4'>
            <div className='max-w-7xl mx-auto mb-16'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-fodBlue title-underline-orange'>Contact Our Branch</h2>
                    <p className='pt-8 text-xl font-medium text-fodOrange/80'>You&apos;re welcome to reach out to us by phone, email, or by visiting us in person.
                    </p>
                </div>
                <div className='mt-12 flex flex-col lg:flex-row gap-10 '>
                    <div className='lg:w-1/3 shadow border p-8 flex flex-col gap-8 rounded-lg'>
                        <h2 className='text-4xl font-semibold text-fodBlue'>FOD Holidays Office</h2>
                        <p className='text-lg flex items-center gap-4'> <MapPin size={40} />FOD TOWER, Simar Enclave, Maheru, Punjab 144411</p>
                        <p className='text-lg flex items-center gap-4'><Phone />+91 9779434405</p>
                        <p className='text-lg flex items-center gap-4'><Mail />fodholidays@gmail.com</p>
                        <div className='mt-4 w-full'>
                        <button className='flex gap-2 items-center p-2 px-4 bg-green-500 text-white font-semibold rounded-lg mx-auto'> <FaWhatsapp size={20} />Whatsapp Us</button>
                        </div>
                    </div>
                    <div className='w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.826322147021!2d75.6965402!3d31.253230900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5fa49863296f%3A0x84046922113f158d!2sFOD%20Living%20Office!5e0!3m2!1sen!2sin!4v1760985610246!5m2!1sen!2sin" className='rounded-lg w-full' width="700" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs