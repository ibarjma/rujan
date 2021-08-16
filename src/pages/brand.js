import { useEffect, useState, React } from 'react'
import Circular from './../components/circular'
import Corona from '../components/corona'
import Ask from '../components/ask'
import { useLocation } from 'react-router-dom'

export default function Brand() {
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

  useEffect(() => {
    document.body.classList.remove('root-pink')
    document.body.classList.add('root-black')
  })

  return (
    <div>
      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='blennySpecialYellow pl-4 lg:text-7xl text-7xl pt-8'>
              {' '}
              MARKETING DIGITAL <br></br>
            </p>

            <p className='poppinsSemiBold yellow'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              repudiandae in, ab quam velit, nemo quis repellat atque quidem
              totam aut, fuga vitae? Dolorum error incidunt quia nobis quaerat
              vel?{' '}
              <span className='poppinsBold yellow'>nuevas oportunidades.</span>
            </p>
            <p className='poppinsSemiBold yellow'>
              <span className='poppinsBold yellow'>
                {' '}
                Captamos, formamos y desarrollamos
              </span>{' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              harum eligendi quaerat nesciunt consectetur debitis labore
              exercitationem sunt qui dolor aperiam culpa in quam est assumenda
              ad, vitae vero molestiae!
            </p>
            <p className='poppinsSemiBold yellow'>
              Esto hace que puedan transmitir los
              <span className='poppinsBold yellow'>
                {' '}
                valores, beneficios y ventajas
              </span>{' '}
              de los mismos con el potencial que ofrecen hoy todas las
              plataformas digitales para entrar en contacto directo e íntimo con
              los consumidores.
            </p>
          </div>

          <div class='my-1 w-full px-2 sm:px-16 lg:left-0 sm:right-20 sm:relative lg:inline sm:w-1/2 justify-center mb-16'>
            <div class='xl:w-96 xl:h-96 lg:w-96 lg:h-96 sm:w-72 w-80 sm:h-72 h-80 w-80 h-80 m-4 relative left-16'>
              <div className='cuadradoGrande'>
                <div
                  style={{ width: '100%', height: '100%' }}
                  className='my-1 w-full px-2 sm:px-16  sm:w-1/2 cuadradoRosa'
                ></div>
                <img className='img1' src='images/brand/img1.png' alt='' />
              </div>
            </div>
          </div>

          <div className='my-1 w-full px-2 sm:px-16 relative sm:w-1/2'>
            <img
              className='absolute fuegorosaBrand'
              src='images/brand/fuegorosa.svg'
              alt=''
            />
            <div className='relative right-16 md:px-4 px-16 py-8 foto2'>
              <img
                className='absolute object-cover rounded-full'
                src={`images/main/c4.jpg`}
                alt=''
              />
            </div>
          </div>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='blennySpecialYellow pl-4 lg:text-6xl yellow text-4xl relative top-16 right-32 pt-36'>
              {' '}
              SHOPSTREAMING <br></br>
            </p>
          </div>
          <div class='relative my-1 w-full px-2 sm:px-16  sm:w-1/2'></div>

          <div class='my-1 w-full px-2 pt-16 sm:px-16  sm:w-1/2'>
            <p className='poppinsSemiBold yellow'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
              dicta. Quod numquam omnis illo facilis! Veritatis, at delectus?
              Rem facilis esse nam doloribus, alias tenetur. Architecto nobis at
              quibusdam qui? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel eligendi itaque iure quibusdam expedita nisi, facilis
              accusamus voluptates asperiores natus mollitia veritatis quidem.
              Modi est, maxime vitae velit quis quo?
            </p>
          </div>

          <div class='relative my-1 w-full px-2 sm:px-16  sm:w-1/2 relative top-20'>
            <div
              style={{ height: '10vw' }}
              class='my-1 w-full px-2 sm:px-16 sm:w-1/2'
            >
              <p></p>
            </div>

            <div className='text-6xl nowrap relative'>
              <img
                className='absolute coronaMini'
                src='images/main/coronaCeleste.svg'
                alt=''
              />
              <p className='poppinsBold text-3xl yellow pt-2 pb-4 whitespace-nowrap relative right-2'>
                {' '}
                ESCUELA RUJAN
              </p>
              <p className='blennySpecialYellow  py-2'>FOR BUSINESS</p>
            </div>

            <div className='poppinsRegular yellow relative top-2'>
              <div
                style={{
                  width: '100%',
                  fontFamily: 'PoppinsSemiBold',
                  paddingBottom: '28vw',
                }}
              >
                <p>
                  Estos son nuestros pilares de trabajo.{' '}
                  <span className='poppinsBold'>
                    Ser auténticos, reales y transmitir nuestra pasión.
                  </span>{' '}
                </p>
                <p>
                  Trabajar para mejorar siempre y evolucionar. Descubrir,
                  aprender y analizar.
                </p>
                <p>
                  Y en ellos, en tu disciplina y en tus ganas,{' '}
                  <span className='poppinsBold'>
                    están las puertas del éxito.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div class='relative my-1 w-full px-2 sm:px-16 h-64 sm:w-1/2 '>
            <div className='flex justify-center'>
              <button
                style={{ backgroundColor: '#83dbe0' }}
                className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full mt-16'
              >
                IR A SHOPSTREAMING
              </button>
            </div>
            <img className='pt-8' src='images/brand/img2.png' alt='' />
          </div>
        </div>
      </div>
      <div className='relative'>
        <img
          className='olaCeleste'
          src='images/brand/formaCelesteGrande.svg'
          alt=''
        />
        {/* <section className='fondoCeleste'></section> */}
      </div>
      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='relative my-1 w-full px-2 sm:px-16 h-64'>
            <p className='relative text-7xl poppinsBold  pt-16 flex justify-center text-center'>
              TRABAJA <span className='poppinsBold yellow'> CON NOSOTROS!</span>
            </p>
            <p className='relative text-4xl poppinsRegular py-8 flex justify-center'>
              Marcá una reunión con nuestro equipo.
            </p>
            <div className='relative top-8 flex justify-center'>
              <div className='cuadradoN rounded '></div>
            </div>
            <span className='relative top-4 text-2xl yellow poppinsRegular py-8 flex justify-center mb-32 '>
              <span>VER TÉRMINOS Y CONDICIONES</span>
            </span>
            <div className='absolute flex'></div>
          </div>

          <div class='my-1 w-full px-2 sm:px-16  h-64 sm:w-1/2'>
            <p></p>
          </div>

          <div class='relative my-1 w-full px-2 sm:px-16 h-64  sm:w-1/2'>
            <p></p>
          </div>
          <div class='relative my-1 w-full px-2 sm:px-16 h-64  sm:w-1/2'>
            <p></p>
          </div>
          <div class='my-1 w-full px-2 sm:px-16  h-32 sm:w-1/2'>
            <p></p>
          </div>

          <div class='my-1 w-full px-2 sm:px-16  h-32 sm:w-1/2'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}
