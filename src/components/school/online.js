import React from 'react'
import Titlefig from '../titlefig'
const Online = () => {
  return (
    <div className='py-16'>
      <div className='poppinsBold text-md sm:text-3xl justify-center flex'>
        <span>EDUCACIÓN ONLINE&nbsp;</span>{' '}
        <span className='yellow'>QUE FUNCIONA</span>
      </div>
      <Titlefig>
        <span
          key='1'
          title='Algo'
          descrip='lorem isdlfnasdk aas dnsa d asljd asd asd j sd'
          links={['asda12', ' dwqdqwd ', '812dkjka']}
          link='algo'
          href='unadirec'
        ></span>
        <span
          key='2'
          title='Algo'
          descrip='lorem isdlfnasdk aas dnsa d asljd asd asd j sd'
          links={['asda12', ' dwqdqwd ', '812dkjka']}
          link='algo'
          href='unadirec'
        ></span>
        <span
          key='3'
          title='Algo'
          descrip='lorem isdlfnasdk aas dnsa d asljd asd asd j sd'
          links={['asda12', ' dwqdqwd ', '812dkjka']}
          link='algo'
          href='unadirec'
        ></span>
      </Titlefig>
    </div>
  )
}

export default Online
