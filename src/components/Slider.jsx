import {React, useState, useEffect, useCallback } from 'react'
import data from '../data'
import Slide from './Slide'

export default function Slider() {
    const [slides] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    const goNext = useCallback(() => {
        setActiveIndex((oldValue) => {
            return (oldValue + 1) % slides.length;
        })
    },[slides.length])

    const goPrev = () => {
        setActiveIndex((oldValue) => {
            return (oldValue - 1) % slides.length;
        }) 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            goNext()
        }, 5000)
        return () => {
            clearTimeout(timer)
        }
    }, [activeIndex, goNext])
    
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
