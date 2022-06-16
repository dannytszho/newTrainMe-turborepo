import React from 'react'
import ColorList from 'ui/public/common/ColorList'

export const ColorsS = ({}) => {
  return (
    <>
      <h2>Color</h2>
      <div className="grid-rows-none list-none">
        {ColorList[0].map(({ name, color }) => (
          <li
            className="flex justify-start space-x-20 space-y-2 border-b-2"
            key={name}
          >
            <div className="w-10 h-10" style={{ background: color }}></div>
            <div>{name}</div>
            <div>background-color: {color}</div>
          </li>
        ))}
      </div>
    </>
  )
}
