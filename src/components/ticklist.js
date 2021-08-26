import React from 'react'
import PropTypes from 'prop-types'
const Ticklist = ({ children, sub }) => {
  return (
    <>
      <ul className='poppinsSemiBold'>
        {children.map((element) => (
          <l className='p-2'>
            <span
              className='flex items-center
             '
            >
              <img
                className='tick p-2 ml-2'
                src='images/school/tick.svg'
                alt=''
              />{' '}
              <p>{element.props.children}</p>
            </span>
            <p className='poppinsRegular italic text-sm p-2'>
              {element.props.sub}
            </p>
          </l>
        ))}
      </ul>
    </>
  )
}

export default Ticklist

Ticklist.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  id: PropTypes.string,
}
