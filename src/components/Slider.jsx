import {React, useState, useEffect } from 'react'
import data from '../data'
import Slide from './Slide'

export default function Slider() {
    const [slides, setSlides] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    const goNext = () => {
        if (activeIndex < slides.length - 1)
            setActiveIndex((oldValue) => {
                return oldValue + 1;
            })
        else {
            setActiveIndex(0)
        }
    }

    const goPrev = () => {
        if (activeIndex > 0)
            setActiveIndex((oldValue) => {
                return oldValue - 1;
            })
        else {
            setActiveIndex(slides.length - 1)
        }
    }


    return (
        <div className='slider'>
            {
                slides.map((slide) => {
                    let classP = "";
                    if (activeIndex === slide.id - 1) {
                        classP = "active";
                    } else if (activeIndex === slide.id || (activeIndex === 0 && slide.id === slides.length -1)) {
                        classP = "prev";
                    } else {
                        classP = "next";
                    }
                    return (
                    <Slide key={slide.id} slide={slide} classP={classP}/>
                )})
            }
            <div className='w-100 d-flex justify-content-between align-items-end'>
                <button className='btn btn-primary' onClick={goPrev}>Prev</button>
                <button className='btn btn-primary' onClick={goNext}>Next</button>
            </div>
        </div>
    )
}
