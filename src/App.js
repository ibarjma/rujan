import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
// const Index = lazy(() => import('./pages/index'))

function App() {
  const { user } = useAuthListener()

  const [isOpen, setIsOpen] = useState(false)

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
  return (
    //  usar un PROVIDER
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Header toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.MAIN} component={Main} />
            {/* <Route path={ROUTES.INDEX} component={Index} /> */}
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App
