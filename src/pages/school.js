import { useEffect, useState, React } from 'react'
import Circular from './../components/circular'
import Corona from '../components/corona'
import Ask from '../components/ask'
import AOS from 'aos'
export default function School() {
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
    document.body.classList.add('root-pink')
  })
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <div>
      {/* <img className='fuego' src='images/main/fuego.svg' alt='' /> */}
      {/* <section className='celeste'></section> */}
      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='poppinsSemiBold text-2xl pt-4 pb-2'>
              {' '}
              <span className='PoppinsBold'> Cursos y Workshops </span> online
              de
            </p>
            <p
              data-aos='zoom-y-out'
              className='blennySpecialYellow pl-4 lg:text-7xl text-5xl pt-8'
            >
              {' '}
              INFLUENCIA DIGITAL
            </p>

            <ul className='poppinsSemiBold'>
              <li>
                <span className='flex '>
                  <img className='tick' src='images/school/tick.svg' alt='' />{' '}
                  <span>Feedback Personalizado</span>
                </span>
              </li>
              <li>
                <span className='flex '>
                  <img className='tick' src='images/school/tick.svg' alt='' />{' '}
                  <span>Flexibilidad horaria</span>
                </span>
              </li>
              <li>
                <span data-aos='zoom-y-out' className='flex '>
                  <img className='tick' src='images/school/tick.svg' alt='' />{' '}
                  <span>Calidad 100% asegurada</span>
                </span>
              </li>
            </ul>

            <span className='flex '>
              <img
                className='relative info pr-2'
                src='images/school/info.svg'
                alt=''
              />{' '}
              <span>
                Prueba una clase y si no te gusta te devolvemos el dinero.
              </span>
            </span>

            <span className='flex '>
              <div className='flex justify-center px-4'>
                <button
                  style={{ backgroundColor: 'yellow', color: '#eb008b' }}
                  className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-16 '
                >
                  VER CURSOS
                </button>
              </div>
              <span>
                <div className='flex justify-center px-4'>
                  <button
                    style={{ backgroundColor: '#eb008b' }}
                    className='font-bold py-2 px-4 rounded mt-16 border-solid yellow'
                  >
                    <span className='flex align-items center'>
                      <img
                        className='relative info pr-2'
                        src='images/school/info.svg'
                        alt=''
                      />{' '}
                      <span>Tienes dudas? Escríbenos!</span>
                    </span>
                  </button>
                </div>
              </span>
            </span>
          </div>

          <div class='my-1 w-full px-2 sm:px-16 lg:left-0 sm:right-20 sm:relative lg:inline sm:w-1/2 justify-center'>
            <div class='xl:w-96 xl:h-96 lg:w-96 lg:h-96 sm:w-72 w-80 sm:h-72 h-80 w-80 h-80 m-4 relative'>
              <img
                data-aos='zoom-y-out'
                data-aos-delay='150'
                className='absolute z-10 ilus'
                src='images/school/ilus3.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto my-1 px-2 sm:px-16 px-32 relative pt-16 '>
        <div className='cuadradoDesfazado relative'>
          <div className='cuadradoRosita absolute '></div>
          <div className='infos flex  absolute'>
            <div className='flex z-10'>
              <div className='block'>
                <div className='flex p-4'>
                  <span className='p-2'>
                    <img
                      className='icon'
                      src='images/school/dolar.svg'
                      alt=''
                    />
                  </span>
                  <span>PRECIO ACCESIBLE</span>
                </div>
                <p className='p-4'>
                  Tenemos un plan de Becas al mérito para les creators que se
                  comprometan con la Escuela y la metodología del curso
                </p>
              </div>
            </div>
            {/*  */}
            <div className='flex z-10'>
              <div className='block'>
                <div className='flex p-4'>
                  <span className='p-2'>
                    <img
                      className='icon'
                      src='images/school/estrella.svg'
                      alt=''
                    />
                  </span>
                  <span>PRECIO ACCESIBLE</span>
                </div>
                <p className='p-4'>
                  Tenemos un plan de Becas al mérito para les creators que se
                  comprometan con la Escuela y la metodología del curso
                </p>
              </div>
            </div>
            {/*  */}
            <div className='flex z-10'>
              <div className='block'>
                <div className='flex p-4'>
                  <span className='p-2'>
                    <img
                      className='icon'
                      src='images/school/tutor.svg'
                      alt=''
                    />
                  </span>
                  <span>PRECIO ACCESIBLE</span>
                </div>
                <p className='p-4'>
                  Tenemos un plan de Becas al mérito para les creators que se
                  comprometan con la Escuela y la metodología del curso
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>

        <div className='fondoCeleste1 absolute'></div>
      </div>
      <div className='my-1 w-full px-2 sm:px-16 relative pt-16 '>
        <div className='relative md:px-4 px-16 py-16'>
          <p className='flex justify-center yellow blenny yellow text-3xl text-center py-16'>
            NUESTRES ESTUDIANTES NOS RECOMIENDAN!
          </p>
        </div>
      </div>

      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
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
            <img
              src='images/main/footer.svg'
              className='absolute fuegofooter'
              alt=''
            />
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
      </div>
    </div>
    /* <img
        className='inline xl:w-3/6 xl:h-3/6 lg:w-3/6 lg:h-3/6 sm:w-3/6 sm:h-3/6 w-3/6 h-3/6'
        src='images/main/Recurso 2.png'
        alt=''
      /> */
  )
}
