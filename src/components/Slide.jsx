import React from 'react'

export default function Slide(props) {
  return (
    <div className={'slide' + props.classes}>
        <div className='review'>
            <h4>{props.slide.autore}</h4>
        </div>
    </div>
  )
}
