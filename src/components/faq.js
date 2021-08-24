import React from 'react'
import Ask from './ask'
import { useState } from 'react'

export default function Faq() {
  const [isOpen, setIsOpen] = useState({
    id1: false,
    id2: false,
    id3: false,
    id4: false,
    id5: false,
  })
  const { id1, id2, id3, id4, id5 } = isOpen

  const toggle = (e) => {
    let id = e.target.id
    console.log(id)
    setIsOpen({
      ...isOpen,
      [id]: !isOpen[id],
    })
  }
  return (
    <div class='my-1 w-full pt-16 px-4 mx-4 mt-32'>
      <div style={{ zIndex: -1 }} className='relative'>
        <p className='blenny text-9xl yellow z-10'>FAQ</p>
        <span className='absolute celestito'></span>
      </div>
      <div className='pb-16 mb-16'>
        <Ask
          ask='¿Cómo me inscribo'
          id='id1'
          response='En cada Nivel tienes la opción de abonar la totalidad del curso o el módulo que quieras.'
          isOpen={id1}
          toggle={toggle}
        />
        <Ask
          ask='¿Otorgan certificados al finalizar el curso?'
          id='id2'
          response='Sí, el certificado es digital y para recibirlo tienes que haber cumplido con los siguientes requisitos:'
          isOpen={id2}
          toggle={toggle}
        />
        <Ask
          ask='¿Cuál es el rol de los tutores?'
          id='id3'
          response='jorge'
          isOpen={id3}
          toggle={toggle}
        />
        <Ask
          ask='¿Cuándo se realizan los Workshops?'
          id='id4'
          response='jorge'
          isOpen={id4}
          toggle={toggle}
        />

        <Ask
          ask='¿Qué es Rujan?'
          id='id5'
          response='jorge'
          isOpen={id5}
          toggle={toggle}
        />
      </div>
    </div>
  )
}
