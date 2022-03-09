import React from 'react'

export default function PartOfDualSlider({value, name, settings}) {

  return (
    <input 
        type="range" 
        name={name}
        value={value}
        onChange={settings.onChange}
        step={settings.step} // 5min-steps
        max={settings.max} // 24hours * 60mins 
        min={settings.min}
        />
  )
}
