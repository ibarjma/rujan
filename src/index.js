import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FirebaseContext from './context/firebase'
import { firebase, FieldValue } from './lib/firebase'
import './styles/rujan.css'
import './styles/app.css'

//  fonts
import { BrowserRouter as Router } from 'react-router-dom'

import './fonts/Blenny.ttf'
import './fonts/Poppins-Bold.ttf'
import './fonts/Poppins-Medium.ttf'
import './fonts/Poppins-Regular.ttf'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <Router>
      <App />
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
