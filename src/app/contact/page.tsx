import Link from 'next/link'
import React from 'react'
import customerSupport from "@fod/assets/icons/customer-support.svg";
import Image from 'next/image';


function page() {
    return (
        <div className=" w-full h-full">
            <div className=" w-full py-16 ">
                <div className='w-full text-center'>
                    <h1 className='text-xl md:text-[32px] font-bold text-center text-fodBlue title-underline-orange'>Any Questions No Worries?</h1>
                </div>
                <div className=" w-full flex flex-col gap-y-4">
                    <div className="w-full flex justify-center items-center">
                        <Image src={customerSupport} alt="Support" className=" w-64 " />
                    </div>
                    <div className="w-full px-8">
                        <h4 className=" text-xl  md:text-[32px] text-center w-full text-black font-normal">
                            We&apos;re Here To Help
                        </h4>
                        <h3 className=" text-lg  md:text-[28px] text-center w-full text-black font-medium">
                            FOD Holiday&apos;s 5-star Customer Service
                        </h3>
                        <hr className=" border-dash m-auto " />
                    </div>
                </div>
                <div className=" w-full mt-8">
                    <p className=" px-8 w-11/12 md:w-1/2 text-center text-sm m-auto ">
                        Whether you’re planning your first trip or looking for expert guidance, our travel team is here to help. With years of experience crafting unforgettable journeys, you can count on us every step of the way.
                    </p>
                    <ul className="px-8 w-11/12 md:w-1/2 text-center m-auto  text-sm mt-8 text-fodOrange">
                        <li>CONTACT: +91 97794 64405</li>
                        <li className="mb-2">CONTACT: +91 95019 09482</li>
                        <Link className="!text-fodOrange" href="/contact">CONTACT US</Link>
                    </ul>
                </div>

                <div className="w-full mt-8">
                    <h4 className=" text-black text-md font-medium text-center m-auto">
                        GENERAL CUSTOMER SERVICE
                    </h4>
                    <hr className=" border-dash-content m-auto" />
                </div>
                <div className="mt-4 flex justify-center items-start gap-6 lg:gap-10 flex-wrap">
                    <div className=" flex flex-col justify-center items-f gap-4 ">
                        <h5 className=" text-lg font-semibold text-center">CUSTOMER SERVICE</h5>
                        <ul className="list-none mb-10 text-center  md:text-left text-sm">
                            <li className="pb-2 transition-all duration-800 ease-in-out hover:font-bold">
                                <a target="blank" href="https://res.cloudinary.com/dbsn2fr4b/image/upload/v1714292037/RTPL_T_C_nxihqt.pdf" className="!text-black hover:!text-[#0C6980] cursor-pointer">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li className="pb-2 transition-all duration-800 ease-in-out hover:font-bold">
                                <a target="blank" href="https://res.cloudinary.com/dbsn2fr4b/image/upload/v1714093798/RTPL_WARRANTY_xwfkuq.pdf" className="!text-black hover:!text-[#0C6980] cursor-pointer">
                                    Warranty Information
                                </a>
                            </li>
                            <li className="pb-2 transition-all duration-800 ease-in-out hover:font-bold">
                                <Link href="/careers" className="!text-black hover:!text-[#0C6980] cursor-pointer">
                                    Careers
                                </Link>
                            </li>
                            <li className="pb-2 transition-all duration-800 ease-in-out hover:font-bold">
                                <a href="https://www.termsfeed.com/live/6d98548d-a4e5-418a-8348-a32e60aad39b" target="balnk" className="!text-black hover:!text-[#0C6980] cursor-pointer">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex flex-col justify-center items-start gap-2 ">
                        <h5 className=" text-lg font-semibold text-cet">CORPORATE</h5>
                        <p className=" w-56 text-sm">
                           FOD TOWER, Simar Enclave, Maheru, Punjab 144411
                        </p>
                        <Link href="/contact" className="!text-[#0C6980]">Email Contact Form</Link>
                        <a href="https://wa.me/919650376785" target="blank" className="!text-[#0C6980]">Whatsapp Us</a>
                    </div>
                    <div className=" flex flex-col justify-center items-start gap-4 ">
                        <h5 className=" text-lg font-semibold ">SOCIAL MEDIA</h5>
                        <ul className="list-none mb-10 text-center  md:text-left text-sm">
                            <li className="pb-2 transition-all duration-800 ease-in-out hover:font-bold">
                                <a href="https://www.facebook.com/relaxoratech?mibextid=ZbWKwL" target="blank" className="!text-black hover:!text-[#0C6980] cursor-pointer">
                                    Facebook
                                </a>
                            </li>
                            <li className="pb-2 transition-all duration-800 ease-in-out hover:font-bold">
                                <a href="https://x.com/relaxoratech?t=OMbyny3txXaiYPZxpa1DWQ&s=09" target="blank" className="!text-black hover:!text-[#0C6980] cursor-pointer">
                                    Twitter (X)
                                </a>
                            </li>
                            <li className="pb-2 transition-all duration-800 ease-in-out hover:font-bold">
                                <a href="https://www.instagram.com/relaxoratech?igsh=eGF6eGgyZXd0dTZ5" target="blank" className="!text-black hover:!text-[#0C6980] cursor-pointer">
                                    Instagram
                                </a>
                            </li>
                            <li className="pb-2 transition-all duration-800 ease-in-out hover:font-bold">
                                <a href="https://www.linkedin.com/company/relaxoratech/" target="blank" className="!text-black hover:!text-[#0C6980] cursor-pointer">
                                    LInkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page