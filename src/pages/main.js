import { useEffect, React } from 'react'
import Circular from './../components/circular'
import Faq from '../components/faq'
import Manada from '../components/manada'

export default function Main() {
  useEffect(() => {
    document.body.classList.add('root-pink')
  })

  return (
    <div>
      <img className='fuego' src='images/main/fuego.svg' alt='' />
      {/* <section className='celeste'></section> */}
      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='blennySpecialYellow pl-4 lg:text-9xl text-9xl pt-8'>
              {' '}
              SMO
            </p>
            <p className='poppinsBold text-lg yellow pt-2 pb-8'>
              {' '}
              SOCIAL MEDIA OPPORTUNITIES
            </p>
            <p className='poppinsSemiBold yellow'>
              Somos una compañia Social Media Opportunities, pensada y diseñada
              para relacionar a creators, marcas y consumidores en un mundo
              lleno de{' '}
              <span className='poppinsBold yellow'>nuevas oportunidades.</span>
            </p>
            <p className='poppinsSemiBold yellow'>
              <span className='poppinsBold yellow'>
                {' '}
                Captamos, formamos y desarrollamos
              </span>{' '}
              creators para transformarse en los mejores representantes de una
              marca o producto.
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

          <div class='my-1 w-full px-2 sm:px-16 lg:left-0 sm:right-20 sm:relative lg:inline sm:w-1/2 justify-center'>
            <div class='xl:w-96 xl:h-96 lg:w-96 lg:h-96 sm:w-72 w-80 sm:h-72 h-80 w-80 h-80 m-4 relative'>
              <img
                className='absolute z-10 object-cover xl:w-96 xl:h-96 lg:w-96 lg:h-96 sm:w-72 w-80 sm:h-72 h-80 w-80 h-80 m-4 rounded-full m-4'
                src='images/main/main1.jpg'
                alt=''
              />
              <img
                style={{}}
                className='absolute'
                src='images/main/forma2.png'
                alt=''
              />
            </div>
          </div>

          <div className='my-1 w-full px-2 sm:px-16 relative sm:w-1/2'>
            <div className='wrapper pt-64 yellow'>
              <Circular
                className='yellow'
                text='Sumate a la manada! Sumate a la manada!'
                arc={360}
                radius={250}
              />
            </div>
            <div className='relative md:px-4 px-16 py-8 foto2'>
              <img src='images/main/foto2.jpg' alt='' />
            </div>
          </div>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='blenny yellow text-7xl'>Viví de tu pasión</p>
            <p className='poppinsSemiBold'>
              El mundo cambió y en{' '}
              <span className='blenny yellow text-4xl'> Rujan </span> hay una
              <span className='poppinsBold'> oportunidad para vos </span>,
              especialízate en lo que deseas y transfórmate en una estrella del
              método KOC y KOL.
            </p>
          </div>
          <div class='relative my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <img
              className='absolute cuadradoceleste'
              src='images/main/formaceleste_1.png'
              alt=''
            />
            <p className='poppinsSemiBold yellow text-5xl pt-16 pb-8'>
              Una nueva forma <br />
              <p className='py-4'>de trabajar!</p>
            </p>
            <p className='poppinsSemiBold'>
              No hace falta ir a una oficina, ni viajar, ni volver, ni salir, ni
              llegar. Si algo trajo la tecnología es la libertad de
              oportunidades, la libertad de tus tiempos y de tus espacios
              personales.
            </p>
            <p className='poppinsSemiBold'>
              Y en este mundo nuevo hay espacio para lo que quieras hacer, para
              tus ideas, para tu pasión, para tu progreso y por supuesto para tu
              éxito.
            </p>
            <p className='poppinsSemiBold yellow'>
              No llegamos para cambiar el mundo, llegamos para invitarte a ser
              parte de este mundo nuevo.
            </p>
          </div>

          <div class='my-1 w-full px-2 pt-16 sm:px-16  sm:w-1/2'>
            <div className='cuadradoGrande'>
              <div
                style={{ width: '100%', height: '130%' }}
                className='my-1 w-full px-2 sm:px-16  sm:w-1/2 cuadradoAma'
              ></div>
              <img className='img9' src='images/main/img9.png' alt='' />
            </div>
          </div>

          <div class='relative my-1 w-full px-2 sm:px-16  sm:w-1/2 relative top-20'>
            <img
              src='images/main/coronaRosa.svg'
              className='absolute corona'
              alt=''
            />
            <img
              className='absolute pancho'
              src='images/main/pancho.jpg'
              alt=''
            />

            <div
              style={{ height: '10vw' }}
              class='my-1 w-full px-2 sm:px-16 sm:w-1/2'
            >
              <p></p>
            </div>

            <div className='blennySpecialPink text-6xl nowrap relative'>
              <p className='py-2'>FEEL REAL</p>
              <p className='py-2'>PLAY HARD</p>
              <p className='py-2'>KEEP STRONG</p>
            </div>

            <div className='poppinsRegular relative top-2'>
              <div
                style={{
                  width: '60%',
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
            <img
              className='absolute fuegorosa'
              src='images/main/fuegorosa.svg'
              alt=''
            />
          </div>

          <Manada></Manada>

          {/* <img
            className='absolute fuego-deforme'
            src='images/main/fuego-deforme.svg'
            alt=''
          />

          <img
            src='images/main/footer.svg'
            className='absolute fuegofooter'
            alt=''
          /> */}

          <Faq></Faq>
        </div>
      </div>
    </div>
    /* <img
        className='inline xl:w-3/6 xl:h-3/6 lg:w-3/6 lg:h-3/6 sm:w-3/6 sm:h-3/6 w-3/6 h-3/6'
        src='images/main/Recurso 2.png'
        alt=''
      /> */
  )
}
