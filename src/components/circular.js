import React from 'react'
import PropTypes from 'prop-types'

export default function Circular({ text, arc, radius }) {
  const characters = text.split('')
  const degree = arc / characters.length

  return (
    <h1>
      {characters.map((char, i) => (
        <span
          key={`Circular-span-${i}`}
          style={{
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  )
}
