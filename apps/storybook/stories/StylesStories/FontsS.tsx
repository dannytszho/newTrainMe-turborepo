import React from 'react'

export const FontsS = ({}) => {
  return (
    <>
      <div className="grid grid-cols-1 divide-y">
        <div>
          <h2>Fonts</h2>
        </div>
        <div>
          <br />
          <h1 className="text-gray-500 font-light">FASCINATE</h1>
          <div className="grid grid-cols-2">
            <h2 className="font-fascinate text-[100px]">Aa</h2>
            <h2 className="font-fascinate text-[100px] italic">Aa</h2>
            <h3 className="text-gray-300 font-light">REGULAR</h3>
            <h3 className="text-gray-300 font-light">ITALIC</h3>
          </div>
        </div>
        <br />
        <br />
        <div>
          <h1 className="text-gray-500 font-light">SERIF</h1>
          <div className="grid grid-cols-3">
            <h2 className="text-[100px] font-serif">Aa</h2>
            <h2 className="text-[100px] font-serif italic">Aa</h2>
            <h2 className="text-[100px] font-serif font-bold">Aa</h2>
            <h3 className="text-gray-300 font-light">REGULAR</h3>
            <h3 className="text-gray-300 font-light">ITALIC</h3>
            <h3 className="text-gray-300 font-light">Bold</h3>
          </div>
        </div>
        <br />
        <br />
        <div>
          <h1 className="text-gray-500 font-light">MONO</h1>
          <div className="grid grid-cols-3">
            <h2 className="text-[100px] font-mono">Aa</h2>
            <h2 className="text-[100px] font-mono italic">Aa</h2>
            <h2 className="text-[100px] font-mono font-bold">Aa</h2>
            <h3 className="text-gray-300 font-light">REGULAR</h3>
            <h3 className="text-gray-300 font-light">ITALIC</h3>
            <h3 className="text-gray-300 font-light">Bold</h3>
          </div>
        </div>
      </div>
    </>
  )
}
