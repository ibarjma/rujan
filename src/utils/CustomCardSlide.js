import PropTypes from 'prop-types'
import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Card } from 'semantic-ui-react'

const CustomCardSlide = ({ index, ...cardProps }) => (
  <Slide
    style={{
      height: 'calc(900px - 55vw)',
      minHeight: '450px',
    }}
    index={index}
  >
    <div
      style={{
        height: '100%',
        width: '90%',
      }}
    >
      <Card
        style={{
          height: '100%',
        }}
        fluid
        {...cardProps}
      />
    </div>
  </Slide>
)

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired,
}

export default CustomCardSlide
