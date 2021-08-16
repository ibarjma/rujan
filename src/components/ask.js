import React from 'react'

const Ask = ({ ask, response, isOpen, toggle, id }) => {
  return (
    <div className='poppinsBold yellow text-2xl py-8'>
      {isOpen ? <span>- </span> : <span>+ </span>}
      <span>
        <span id={id} onClick={toggle}>
          {ask}
        </span>
      </span>
      <div
        className={
          isOpen ? 'text-center items-center poppinsSemiBold nowrap' : 'hidden'
        }
        onClick={toggle}
      >
        <p
          id={id}
          style={{ whiteSpace: 'initial' }}
          className='poppinsSemiBold yellow text-xl pt-8'
        >
          {response}
        </p>
      </div>
    </div>
  )
}

export default Ask
