import React from 'react'

const Curso = ({ category, title, descrip, list }) => {
  return (
    <div className='border-solid yellow curso relative'>
      <div className=' flex justify-end p-4'>
        {/* categoria */}
        <p className='border category px-4'>{category}</p>
      </div>
      <div className='p-4 text-xl'>
        {/* title */}

        {title}
      </div>
      <div>{/* list || descrip */}</div>
      {descrip !== undefined ? (
        <div>
          <div className='p-4 text-md'>{descrip}</div>

          <div>{list}</div>
        </div>
      ) : (
        <div>{list}</div>
      )}
      <div className='flex justify-center poppinsBold relative'>
        <button className='buttonCategory p-1 absolute top-0'>
          <span className='p-2'>VER {category}</span>
        </button>
      </div>
    </div>
  )
}

export default Curso
