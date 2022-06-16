import React from 'react'
import ColorList from 'ui/public/common/ColorList'

export const ColorsS = () => {
  return (
    <>
      <h2 className="text-lg font-bold">Colors</h2>
      <div className="grid-rows-none list-none">
        {ColorList.map(item => (
          <>
            <div className="underline m-2">{item.variant}</div>
            <ul>
              {item.info.map(({ color, name }) => (
                <li
                  className="flex justify-start space-x-20 space-y-2 border-b-2"
                  key={name}
                >
                  <div
                    className="w-10 h-10"
                    style={{ background: color }}
                  ></div>
                  <div>{name}</div>
                  <div>background-color: {color}</div>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </>
  )
}
