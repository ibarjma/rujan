import React from 'react'
import PropTypes from 'prop-types'
const Ticklist = ({ children, style }) => {
  console.log([...children][0].props.children)
  return (
    <>
      <ul className='poppinsSemiBold'>
        {children.map((element) => (
          <li>
            <span className='flex '>
              <img className='tick' src='images/school/tick.svg' alt='' />{' '}
              <p>{element.props.children}</p>
            </span>
          </li>
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
