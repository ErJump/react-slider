import {React, useState, useEffect } from 'react'
import data from '../data'
import Slide from './Slide'

export default function Slider() {
    const [slides, setSlides] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

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
        </div>
    )
}
