import React from 'react'
import { starCreator } from '../starCreator'

export default function Slide(props) {
  return (
    <div className={'slide bg-dark ' + props.classP}>
        <div className='review'>
            <h4 className='text-white'>{props.slide.autore}</h4>
            <p className='text-white'>{props.slide.recensione}</p>
            <div className='star-container'>
                {starCreator(props.slide.voto)}
            </div>
        </div>
    </div>
  )
}
