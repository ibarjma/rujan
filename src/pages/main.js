import { useEffect, useState, React } from 'react'
import Circular from './../components/circular'
import Corona from '../components/corona'
import Ask from '../components/ask'

export default function Main() {
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
    <div>
      <img
        style={{
          position: 'absolute',
          top: '-0.25rem',
          left: '-0.25rem',
          zIndex: '-1',
          width: '40%',
        }}
        src='images/main/forma1.png'
        alt=''
      />
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

          <div class='relative my-1 w-full px-2 sm:px-16 h-64'>
            <section className='fondoNegro'></section>
            <p className='relative text-7xl blenny yellow pt-16 flex justify-center text-center'>
              Sumate a la manada!
            </p>
            <p className='relative text-2xl yellow poppinsSemiBold py-8 flex justify-center'>
              Si eres influencer o quieres ser uno exitoso, esta es tu
              oportunidad!
            </p>
            <p className='relative text-2xl yellow poppinsBold py-8 flex justify-center'>
              Sé parte del movimiento Rujan, agenda tu horario y participá del
              casting.
            </p>
            <span className='relative text-3xl poppinsSemiBold py-8 flex justify-center'>
              <button
                style={{ backgroundColor: 'rgb(255, 255, 50)' }}
                className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'
              >
                INSCRIBITE!
              </button>
            </span>
            <span className='relative text-xl yellow poppinsRegular py-8 flex justify-center'>
              <span>Ver términos y condiciones</span>
            </span>
            <div className='absolute flex'>
              <Corona
                style={{
                  position: 'relative',
                  top: '-15rem',
                  left: '-5rem',
                  zIndex: '-1',
                }}
                imagen='c1.jpg'
                color='celeste'
              ></Corona>
              <Corona
                style={{ position: 'relative', top: '-10rem', zIndex: '-1' }}
                imagen='c2.jpg'
                color='rosa'
              ></Corona>
              <Corona
                style={{
                  position: 'relative',
                  top: '-2rem',
                  left: '-17.5rem',
                  zIndex: '-1',
                }}
                imagen='c33.jpg'
                color='celeste'
              ></Corona>
              <Corona
                style={{
                  position: 'relative',
                  top: '-10rem',
                  left: '27.5rem',
                  zIndex: '-1',
                }}
                imagen='c4.jpg'
                color='rosa'
              ></Corona>
              <Corona
                style={{
                  position: 'relative',
                  top: '-2rem',
                  left: '10rem',
                  zIndex: '-1',
                }}
                imagen='c5.jpg'
                color='celeste'
              ></Corona>
            </div>
          </div>

          <div class='my-1 w-full px-2 sm:px-16  h-64 sm:w-1/2'>
            <p></p>
          </div>

          <div class='relative my-1 w-full px-2 sm:px-16 h-64  sm:w-1/2'>
            <p></p>
            <img
              className='absolute fuego-deforme'
              src='images/main/fuego-deforme.svg'
              alt=''
            />
          </div>
          <div class='relative my-1 w-full px-2 sm:px-16 h-64  sm:w-1/2'>
            <p></p>
          </div>
          <div class='relative my-1 w-full px-2 sm:px-16 h-64  sm:w-1/2'>
            <p></p>
          </div>
          <div class='my-1 w-full px-2 sm:px-16'>
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
        </div>
        <img
          src='images/main/footer.svg'
          className='absolute fuegofooter'
          alt=''
        />
      </div>
    </div>
    /* <img
        className='inline xl:w-3/6 xl:h-3/6 lg:w-3/6 lg:h-3/6 sm:w-3/6 sm:h-3/6 w-3/6 h-3/6'
        src='images/main/Recurso 2.png'
        alt=''
      /> */
  )
}
