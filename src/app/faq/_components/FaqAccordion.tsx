"use client"
import React, { useEffect } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaqDataType } from '@fod/constants/types';

function FaqAccordion({data}:{data:FaqDataType[]}) {
    useEffect(() => {
        AOS.init({ once: true })
    }, [])
    return (
        <Accordion allowZeroExpanded={true}>
            {data.map((item:FaqDataType,index:number)=>(
            <AccordionItem key={index} data-aos="fade-right">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.ques}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {item.ans}
                </AccordionItemPanel>
            </AccordionItem>
            ))}
        </Accordion>
    )
}

export default FaqAccordion