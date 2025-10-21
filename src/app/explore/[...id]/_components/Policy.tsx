import { MainDataType } from '@fod/constants/types'
import React from 'react'

function Policy() {
    return (
        <div className='border rounded-xl p-4 space-y-8'>
            <div className='border-b pb-4'>
                <h2 className=" text-2xl font-semibold">Payment Term Policy</h2>
                <ul className='mt-4'>
                    <li className='list-disc list-inside'>
                        100.0% of total tour cost will have to be paid 0 days before the date of booking
                    </li>
                </ul>
            </div>
            <div className='border-b pb-4'>
                <h2 className=" text-2xl font-semibold">Cancellation Policy</h2>
                <ul className='mt-4 space-y-2'>
                    <li className='list-disc list-inside'>
                        If cancellation is made 30 days or more before the date of travel, 30.0% of total booking cost will be charged as cancellation fees.
                    </li>
                    <li className='list-disc list-inside'>
                        If cancellation is made within 30 days before the date of travel, total booking cost will be charged as cancellation fees.
                    </li>
                    <li className='list-disc list-inside'>
                        In the event of unforeseen weather conditions, union issues, government restrictions, or any other circumstances beyond human control, certain trips or activities may be cancelled. In such cases, alternate feasible options will be provided. However, a cash refund will not be available.
                    </li>
                </ul>
            </div>
            <div className=' pb-4'>
                <h2 className=" text-2xl font-semibold">Refund Policy</h2>
                <ul className='mt-4 space-y-2'>
                    <li className='list-disc list-inside'>
                        Closed Sightseeing due to COVID : For any paid activity which is non-operational due to any unforeseen reason, we will process the refund & same should reach the guest within 30 days of processing the refund. Also, for any activity which is complementary and not charged to Thrillophilia & guest, no refund will be processed.
                    </li>
                    <li className='list-disc list-inside'>
                        In case your package needs to be cancelled due to any natural calamity, weather conditions etc. Thrillophilia shall strive to give you the maximum possible refund subject to the agreement made with our trade partners/vendors.
                    </li>
                    <li className='list-disc list-inside'>
                        In case of getting tested positive for COVID-19, a reschedule will be provided at a later date ( surcharges will be applicable as per season ). Kindly share the reports/documents for verification purposes.
                    </li>
                    <li className='list-disc list-inside'>
                        In case of travel ban for Indians to any country booked in itinerary , Change in itinerary will be offered or if possible a reschedule will be provided on a later date ( surcharges might be applicable according to season )
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Policy