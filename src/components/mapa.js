import * as React from 'react'

function Mapa(props) {
  const countries = [
    'USA',
    'MÉXICO',
    'COLOMBIA',
    'ARGENTINA',
    'BRASIL',
    'URUGUAY',
    'CHINA',
  ]
  const cities = [
    'Miami',
    'Merida',
    'El poblado - Medellin',
    'CABA - Buenos Aires',
    { top: 'Alto De Pinheiros', bottom: 'São Paulo' },
    'Montevideo',
    'Hangzhou',
  ]
  const addresses = [
    '14811 NE 20th ave FL 33181',
    'Virtual Office',
    'Calle 7D #43A-99',
    'Corrientes 6205 (1425)',
    'Rua Natingui 1148',
    'Treinta y tres 1271',
    'Caracteres especiales',
  ]

  countries.forEach((value, index) => {
    let node = document.getElementById('algo-' + index)
    if (node) {
      // center
      let { x, y, width, height } = node.getBBox()
      let cx = x + width / 2
      let cy = y + height / 2
      let center = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      )
      center.setAttribute('cx', cx)
      center.setAttribute('cy', cy)
      center.setAttribute('r', 5)
      center.setAttribute('fill', 'transparent')

      // create nodes with the centered axis

      let country = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text'
      )
      let city = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      let address = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text'
      )
      switch (index) {
        case 0:
        case 1:

        case 3:
        case 6:
          country.setAttribute('x', cx - 130)
          country.setAttribute('y', cy - 30)
          country.setAttribute('style', 'font-weight: bold')
          country.setAttribute('class', 'country')

          city.setAttribute('x', cx - 130)
          city.setAttribute('y', cy)
          city.setAttribute('style', 'font-style: italic')
          city.setAttribute('class', 'city')

          country.innerHTML = countries[index]
          city.innerHTML = cities[index]

          address.setAttribute('x', cx - 130)
          address.setAttribute('y', cy + 30)
          address.setAttribute('style', 'font-style: italic')
          address.setAttribute('class', 'address')
          address.innerHTML = addresses[index]

          node.parentNode.append(country, center, city, address)
          break
        case 2:
        case 4:
        case 5:
          if (index == 4) {
            country.setAttribute('y', cy - 30)
            country.setAttribute('style', 'font-weight: bold')
            country.setAttribute('class', 'country')

            country.setAttribute('x', cx + 60)
            city.setAttribute('x', cx + 60)
            city.setAttribute('y', cy)
            city.setAttribute('style', 'font-style: italic')
            city.setAttribute('class', 'city')

            country.innerHTML = countries[index]
            city.innerHTML = cities[index].top

            let subcity = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'text'
            )
            subcity.setAttribute('x', cx + 60)
            subcity.setAttribute('y', cy + 30)
            subcity.setAttribute('style', 'font-style: italic')
            subcity.setAttribute('class', 'city')
            subcity.innerHTML = cities[index].bottom

            address.setAttribute('x', cx + 60)
            address.setAttribute('y', cy + 60)
            address.setAttribute('style', 'font-style: italic')
            address.setAttribute('class', 'address')
            address.innerHTML = addresses[index]
            node.parentNode.append(country, center, city, subcity, address)
          } else {
            country.setAttribute('x', cx + 60)
            country.setAttribute('y', cy - 30)
            country.setAttribute('style', 'font-weight: bold')
            country.setAttribute('class', 'country')

            city.setAttribute('x', cx + 60)
            city.setAttribute('y', cy)
            city.setAttribute('style', 'font-style: italic')
            city.setAttribute('class', 'city')

            country.innerHTML = countries[index]
            city.innerHTML = cities[index]

            address.setAttribute('x', cx + 60)
            address.setAttribute('y', cy + 30)
            address.setAttribute('style', 'font-style: italic')
            address.setAttribute('class', 'address')
            address.innerHTML = addresses[index]

            node.parentNode.append(country, center, city, address)
          }

          break
      }
    }
  })

  return (
    <svg
      id='prefix__Capa_1'
      data-name='Capa 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1366 768'
      {...props}
    >
      <defs>
        <style>
          {
            '.prefix__cls-1{fill:#00aef4}.prefix__cls-2,.prefix__cls-4{fill:none;stroke-miterlimit:10}.prefix__cls-2{stroke:#00aef4;stroke-width:2px}.prefix__cls-4{stroke:#eb008b}'
          }
          {'.bold{font-weigth: bold}'}
        </style>
      </defs>
      <title>{'Mesa de trabajo 1'}</title>
      <path
        className='prefix__cls-1'
        d='M254.63 553.93A18.69 18.69 0 11236 535.25a18.68 18.68 0 0118.68 18.68'
      />

      <path
        id='algo-6'
        className='prefix__cls-2 bold'
        d='M262.78 554.26a26.91 26.91 0 11-26.91-26.91 26.91 26.91 0 0126.91 26.91z'
      />
      <path fill='none' d='M-486-7057h1920V769H-486z' />
      <path
        className='prefix__cls-4'
        d='M1319.79 639.75c0 290.25-266.83 525.54-596 525.54s-596-235.29-596-525.54c0-98.76 30.9-191.17 84.64-270.1 104.18-153 294.2-255.43 511.35-255.43 216.93 0 406.8 102.19 511 255 53.99 79 85.01 171.57 85.01 270.53zM213.35 370.75l1020.91.56M341 238.37l768.17-.38M147.13 511.36l1154.4-1.22M126.89 638.94h1193.82'
      />
      <path
        className='prefix__cls-4'
        d='M1276.54 639.71c0 289.78-246.34 524.68-550.22 524.68s-550.21-234.9-550.21-524.68c0-98.6 28.52-190.85 78.13-269.66 96.18-152.77 271.61-255 472.08-255 200.28 0 375.56 102 471.8 254.55 49.79 78.9 78.42 171.32 78.42 270.11z'
      />
      <path
        className='prefix__cls-4'
        d='M1175.46 639c0 289.3-205.5 523.83-459 523.83s-459-234.53-459-523.83c0-98.45 23.8-190.55 65.18-269.23 80.24-152.53 226.58-254.61 393.82-254.61 167.06 0 313.28 101.87 393.57 254.15 41.54 78.69 65.43 171 65.43 269.69z'
      />
      <path
        className='prefix__cls-4'
        d='M909.32 638.89c-.23 288.31-85.94 522-191.45 521.91S527 927 527.26 638.65c.08-98.11 10.06-189.89 27.35-268.29 33.51-152 94.5-253.66 164.1-253.62S849 218.34 882.31 370.12c17.22 78.51 27.09 170.47 27.01 268.77zM717.37 115.03l-.9 1047.75'
      />
      <path
        d='M1070.83 625.86c11.17 288.25-138.43 526.77-334.12 532.75S373.34 935.77 362.18 647.52c-3.8-98.08 11-190.41 39.93-269.78 56.05-153.87 165.08-259 294.18-263s245.77 94.1 313.63 243.93c35.08 77.54 57.08 168.91 60.91 267.19z'
        stroke='#c80186'
        strokeMiterlimit={10}
        fill='none'
      />
      <path
        className='prefix__cls-1'
        d='M1090.53 364.64a18.69 18.69 0 11-18.68-18.64 18.68 18.68 0 0118.68 18.68'
      />
      <path
        id='algo-0'
        className='prefix__cls-2'
        d='M1098.78 364.26a26.91 26.91 0 11-26.91-26.91 26.91 26.91 0 0126.91 26.91z'
      />
      <path
        className='prefix__cls-1'
        d='M417.75 255.55a18.69 18.69 0 11-18.68-18.68 18.68 18.68 0 0118.68 18.68'
      />
      <path
        id='algo-1'
        className='prefix__cls-2'
        d='M425.78 255.26a26.91 26.91 0 11-26.91-26.91 26.91 26.91 0 0126.91 26.91z'
      />
      <path
        a
        className='prefix__cls-1'
        d='M362.19 625.22a18.69 18.69 0 11-18.68-18.68 18.68 18.68 0 0118.68 18.68'
      />
      <path
        id='algo-2'
        className='prefix__cls-2'
        d='M370.78 625.26a26.91 26.91 0 11-26.91-26.91 26.91 26.91 0 0126.91 26.91z'
      />
      <path
        className='prefix__cls-1'
        d='M335.31 402.05a18.69 18.69 0 11-18.69-18.69 18.68 18.68 0 0118.69 18.69'
      />
      <path
        id='algo-3'
        className='prefix__cls-2'
        d='M343.78 402.26a26.91 26.91 0 11-26.91-26.91 26.91 26.91 0 0126.91 26.91z'
      />
      <path
        className='prefix__cls-1'
        d='M527.79 383a18.69 18.69 0 11-18.69-18.68A18.69 18.69 0 01527.79 383'
      />
      <path
        id='algo-4'
        className='prefix__cls-2'
        d='M535.78 382.26a26.91 26.91 0 11-26.91-26.91 26.91 26.91 0 0126.91 26.91z'
      />
      <path
        className='prefix__cls-1'
        d='M630.85 177.78a18.69 18.69 0 11-18.68-18.68 18.68 18.68 0 0118.68 18.68'
      />
      <path
        id='algo-5'
        className='prefix__cls-2'
        d='M638.78 177.26a26.91 26.91 0 11-26.91-26.91 26.91 26.91 0 0126.91 26.91z'
      />
    </svg>
  )
}

export default Mapa
