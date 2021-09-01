import React from 'react'

import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'

import CustomCardSlide from './../utils/CustomCardSlide'
// import CustomDotGroup from './../utils/CustomDotGroup'
import Curso from './curso'

const CardCarousel = ({ cursos }) => (
  console.log(cursos),
  (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.25}
      totalSlides={cursos.length}
      style={{ width: '90%' }}
      visibleSlides={3}
    >
      <ButtonBack className='poppinsRegular back text-4xl'>{'<'}</ButtonBack>
      <Slider className='h-auto'>
        {cursos.map((element, index) => (
          <CustomCardSlide
            // style={{ width: '90%' }}
            content={
              <Curso
                category={element.category}
                title={element.title}
                list={element.list}
                descrip={element.descrip}
              />
            }
            key={index + 1}
          />
        ))}
      </Slider>
      <ButtonNext className='poppinsRegular next text-4xl'>{'>'}</ButtonNext>
      {/* <CustomDotGroup slides={7} /> */}
    </CarouselProvider>
  )
)

export default CardCarousel
