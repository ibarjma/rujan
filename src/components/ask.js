import React from 'react'

const Ask = ({ ask, response, isOpen, toggle, id }) => {
  return (
    <div>
      {isOpen ? <span>-</span> : <span>+</span>}
      <p id={id} onClick={toggle}>
        {ask}
      </p>
      <div
        className={
          isOpen
            ? 'grid grid-rows-2 text-center items-center poppinsSemiBold nowrap'
            : 'hidden'
        }
        onClick={toggle}
      >
        <p>{response}</p>
      </div>
    </div>
  )
}

export default Ask
