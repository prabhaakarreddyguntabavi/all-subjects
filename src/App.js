// App.js

// import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import AllSubjects from './components/AllSubjects'
import EachSpecificSubjects from './components/EachSpecificSubjects'
import TextEditor from './components/TestingFolder'

const App = () => {
  console.log('t')
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<AllSubjects />} />
        <Route exact path="/testing" element={<TextEditor />} />
        <Route exact path="/subject/:id" element={<EachSpecificSubjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
