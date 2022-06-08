import React from 'react'
import ColorList from 'ui/public/common/ColorList'

export const ColorsS = ({}) => {
  return (
    <>
      <h2>Color</h2>
      <div className="flex space-x-10">
        {ColorList.map(({ name, color }) => (
          <li key={name}>
            <div className="w-10 h-10" style={{ background: color }}></div>
            <div>{name}</div>
          </li>
        ))}
      </div>
    </>
  )
}
