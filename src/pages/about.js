import { useEffect, React } from 'react'

export default function About() {
  useEffect(() => {
    document.body.classList.add('root-pink')
  })

  return (
    <section className='relative'>
      {/* fondos */}
      <div className='relative px-3 pt-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='poppinsSemiBold text-3xl pt-4 pb-2'>
              {' '}
              <span className='PoppinsBold pl-2'>¿QUÉ ES </span>
            </p>
            <p className='blennySpecialYellow pl-4 lg:text-9xl text-7xl pt-4'>
              RUJAN
            </p>

            <p className='pl-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              tempora sapiente laudantium, architecto perferendis animi
              similique a? Iusto, nostrum ullam perspiciatis fugiat laboriosam,
              hic minus ab, magnam cumque ducimus quia.{' '}
            </p>

            <span className='flex '>
              <div className='flex justify-center px-4'>
                <button
                  style={{ backgroundColor: '#fbe216', color: '#eb008b' }}
                  className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-16 whitespace-   nowrap'
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
                    <span className='flex align-items center border-2 border-yellow-500 rounded-md'>
                      <img
                        className='relative info ml-4'
                        src='images/school/info.svg'
                        alt=''
                      />{' '}
                      <span className=''>Tienes dudas? Escríbenos!</span>
                    </span>
                  </button>
                </div>
              </span>
            </span>
          </div>

          <div class='my-1 w-full px-2 sm:px-16 lg:left-0 sm:right-20 sm:relative lg:inline sm:w-1/2 justify-center mb-16'>
            <div class='xl:w-96 xl:h-96 lg:w-96 lg:h-96 sm:w-72 w-80 sm:h-72 h-80 w-80 h-80 m-4 relative left-16'>
              <div className='cuadradoGrande'>
                <div
                  style={{ width: '100%', height: '100%' }}
                  className='my-1 w-full px-2 sm:px-16  sm:w-1/2 cuadradoCeleste'
                ></div>
                <img className='img1' src='images/about/about1.png' alt='' />
              </div>
              <img
                src='images/main/coronaCeleste.svg'
                className='absolute'
                alt=''
                id='celeste'
              />
              <img
                src='images/main/coronaAma.svg'
                className='absolute'
                alt=''
                id='ama'
              />
            </div>
          </div>

          <div className='my-1 w-full px-2 sm:px-16 relative sm:w-1/2'>
            <div className='relative right-16 md:px-4 px-16 py-16 foto2'>
              <img
                className='relative '
                src={`images/about/about2.png`}
                alt=''
              />
              <img
                src='images/main/coronaRosa.svg'
                className=' absolute'
                id='rosa'
                alt=''
              />
              <img
                src='images/about/about3.png'
                className=' absolute'
                id='formitt'
                alt=''
              />
            </div>
          </div>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='blennySpecialYellow pl-4 lg:text-6xl yellow text-4xl relative '>
              FEEL REAL <br />
              PLAY HARD <br />
              KEEP GOING <br />
            </p>
            <p className='poppinsSemiBold  pl-2 pr-8 pb-4'>
              Estos son nuestros pilares de trabajo. Ser auténticos, reales
              ,transmitir nuestra pasión.
            </p>
            <p className='poppinsSemiBold  pl-2 pr-8 py-4'>
              Trabajar para mejorar siempre y evolucionar. Descubrir, aprender y
              analizar.
            </p>
            <p className='poppinsSemiBold  pl-2 pr-8 py-4'>
              Y en ellos, en tu disciplina y en tus ganas, están las puertas del
              éxito.
            </p>
          </div>
        </div>
      </div>

      <section id='sectionCel' className='relative'>
        <img src='images/about/cel.svg' className='absolute bottom-0' alt='' />
        <div className='relative px-3 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto z-10'>
          <div class='flex flex-wrap -mx-1 '>
            <div class='my-1 w-full px-2 sm:px-16 mt-32 pt-32'>
              <div className='relative'>
                <img src='images/main/coronaAma.svg' id='coronitaAma' alt='' />
                <h1 className='flex justify-center poppinsBold yellow text-6xl'>
                  EQUIPO RUJAN
                </h1>
              </div>
            </div>
            <div class='my-1 w-full px-2 sm:px-16 mt-32 p-32'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                autem provident quae enim hic exercitationem, temporibus labore
                facilis aliquid a beatae id reprehenderit recusandae dolor natus
                eveniet voluptatem rerum eius.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                autem provident quae enim hic exercitationem, temporibus labore
                facilis aliquid a beatae id reprehenderit recusandae dolor natus
                eveniet voluptatem rerum eius.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                autem provident quae enim hic exercitationem, temporibus labore
                facilis aliquid a beatae id reprehenderit recusandae dolor natus
                eveniet voluptatem rerum eius.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                autem provident quae enim hic exercitationem, temporibus labore
                facilis aliquid a beatae id reprehenderit recusandae dolor natus
                eveniet voluptatem rerum eius.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                autem provident quae enim hic exercitationem, temporibus labore
                facilis aliquid a beatae id reprehenderit recusandae dolor natus
                eveniet voluptatem rerum eius.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
