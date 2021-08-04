import { useEffect, useState } from 'react'
import Timeline from '../components/timeline'
import Header from '../components/header'
import Sidebar from '../components/sidebar/index'
import Chart from '../components/chart'
import { firebase, storage } from '../lib/firebase'

export default function Dashboard() {
  const [url, setUrl] = useState('')
  // const [emailAddress, setEmailAddress] = useState('')
  useEffect(() => {
    document.title = 'Dashboard - Rujan'
  }, [])

  // storage
  //   .ref('6989438430254009605.jpg')
  //   .getDownloadURL()
  //   .then((url) => {
  //     console.log(url)
  //     setUrl(url)
  //   })

  return (
    <div className='bg-gray-background'>
      <Header />
      <div className='grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg'>
        <Timeline />
        <Sidebar />
        <img src={url} alt='' />
      </div>
      <div className='p-20	'>
        <Chart />
      </div>
    </div>
  )
}
