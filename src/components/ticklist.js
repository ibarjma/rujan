import React from 'react'
import PropTypes from 'prop-types'
const Ticklist = ({ children }) => {
  return (
    <>
      <ul className='poppinsSemiBold'>
        {children.map((element) => (
          <l className='p-2'>
            <span className='flex items-center'>
              <img className='tick p-2 mx-2 ' src={element.props.img} alt='' />{' '}
              <p className='pr-4'>{element.props.children}</p>
            </span>
            {element.props.sub != undefined ? (
              <div className='poppinsRegular italic text-sm p-2'>
                <p>{element.props.sub}</p>
              </div>
            ) : (
              <span></span>
            )}
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
