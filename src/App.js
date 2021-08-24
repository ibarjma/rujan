import { lazy, Suspense, useState, useEffect, useRef } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import AOS from 'aos'
import { focusHandling } from 'cruip-js-toolkit'

import 'aos/dist/aos.css'

import ReactLoader from './components/loader'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/use-auth-listener'
import Header from './components/header'
import Footer from './components/footer'
import Dropdown from './components/dropdown'

const Login = lazy(() => import('./pages/login'))
const SignUp = lazy(() => import('./pages/signup'))
const NotFound = lazy(() => import('./pages/not-found'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const Main = lazy(() => import('./pages/main'))
const Brand = lazy(() => import('./pages/brand'))
const Influencer = lazy(() => import('./pages/influencer'))
const School = lazy(() => import('./pages/school'))
// const Index = lazy(() => import('./pages/index'))

function App() {
  const { user } = useAuthListener()

  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)
  })

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline')
  }, [location.pathname]) // triggered on route change

  return (
    //  usar un PROVIDER
    <>
      <UserContext.Provider value={{ user }}>
        <Suspense fallback={<ReactLoader />}>
          <Header toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.MAIN} component={Main} />
            {/* <Route path={ROUTES.INDEX} component={Index} /> */}
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.BRAND} component={Brand} />
            <Route path={ROUTES.INFLUENCER} component={Influencer} />
            <Route path={ROUTES.SCHOOL} component={School} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </UserContext.Provider>
    </>
  )
}

export default App
