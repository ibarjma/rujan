import React from 'react'
import { Container, Header, Message, Segment } from 'semantic-ui-react'
import 'pure-react-carousel/dist/react-carousel.es.css'
import CardCarousel from './../CardCarousel'

const Cursos = () => {
  const cursos1 = [
    {
      category: 'CARRERA',
      title: 'Carrera en Influencia Digital',
      list: {
        calendar: '18 semanas',
        time: '30 horas',
        charge: 'Tutor Personal',
      },
    },
    {
      category: 'CURSO',
      title: 'Fundamentos de la creación de contenidos',
      list: {
        calendar: '6 semanas',
        time: '9 horas',
        charge: 'Tutor Personal',
      },
    },
    {
      category: 'CURSO',
      title: 'Técnicas avanzadas de creación de contenido',
      list: {
        calendar: '6 semanas',
        time: '9 horas',
        charge: 'Tutor Personal',
      },
    },
    {
      category: 'Workshop',
      title: 'Carrera en Influencia Digital3',
      list: {
        calendar: '18 semanas',
        time: '30 horas',
        charge: 'Tutor Personal',
      },
    },
    {
      category: 'Workshop',
      title: 'Carrera en Influencia Digital4',
      list: {
        calendar: '18 semanas',
        time: '30 horas',
        charge: 'Tutor Personal',
      },
    },
  ]

  const workshops = [
    {
      category: 'WORKSHOP',
      title: 'Cómo funcionan los algoritmos?',
      descrip: 'Un análisis comparados entre Instagram, Tik Tok e YouTube.',
      list: {
        charge: 'Profesor experto',
      },
    },
    {
      category: 'WORKSHOP',
      title: 'Marketing digital para gamers',
      descrip: 'Aprenda a generar ingresos jugando con el mercado.',
      list: {
        charge: 'Profesor experto',
      },
    },
    {
      category: 'WORKSHOP',
      title: 'Marketing digital para gamers',
      descrip:
        'Contar historias es la mejor manera de conmover el público y convertirlos en tus clientes.',
      list: {
        charge: 'Profesor experto',
      },
    },
    {
      category: 'WORKSHOP',
      title: 'Carrera en Influencia Digital4',
      list: {
        calendar: '18 semanas',
        time: '30 horas',
        charge: 'Tutor Personal',
      },
    },
    {
      category: 'WORKSHOP',
      title: 'Carrera en Influencia Digital4',
      list: {
        calendar: '18 semanas',
        time: '30 horas',
        charge: 'Tutor Personal',
      },
    },
  ]
  return (
    <div className='cursos'>
      <div className='poppinsBold text-md sm:text-3xl justify-center block pt-32 pb-8'>
        <div className='w-full text-center'>
          <span className='poppinsRegular'>ELEGÍ TU&nbsp;</span>{' '}
          <span className='celesteLetra'>CURSO O CARRERA{'\n'}</span>
        </div>
        <div className='w-full text-center'>
          <span className='poppinsRegular'>DE&nbsp;</span>
          <span className='poppinsBold'>INFLUENCIA DIGITAL</span>
        </div>
      </div>

      <div className='relative px-3 pb-8 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto flex justify-center'>
        <div class='flex flex-wrap w-11/12 '>
          <div class=' w-full px-2 sm:px-16  '>
            <div>
              <Segment className='flex justify-center ' attached='bottom'>
                <CardCarousel cursos={cursos1} />
              </Segment>
            </div>
          </div>
        </div>
      </div>

      <div className='poppinsBold text-md sm:text-3xl justify-center block pt-8'>
        <div className='w-full text-center '>
          <span className='poppinsRegular'>ELEGÍ TU&nbsp;</span>{' '}
          <span className='pink'>WORKSHOP{'\n'}</span>
        </div>
        <div className='w-full text-center'>
          <span className='poppinsRegular'>DE&nbsp;</span>
          <span className='poppinsBold'>INFLUENCIA DIGITAL</span>
        </div>
      </div>
      <div className='relative px-3 pt-8 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto justify-center flex pb-32'>
        <div class='flex flex-wrap -mx-1 w-11/12 '>
          <div class=' w-full px-2 sm:px-16  '>
            <Segment className='flex justify-center'>
              <CardCarousel cursos={workshops} />
            </Segment>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cursos
