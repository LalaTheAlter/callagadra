import React from 'react'
import PartOfDualSlider from './PartOfDualSlider'

export default function DualSlider({leftValue, rightValue, ...rest}) {

  return (
    <div className='dualSlider'>
      <PartOfDualSlider 
        value={leftValue} 
        name="left" 
        settings={rest} />
      <PartOfDualSlider 
        value={rightValue} 
        name="right" 
        settings={rest}  />
    </div>
  )
}
