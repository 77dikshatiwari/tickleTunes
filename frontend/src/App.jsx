import react from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

import HomePage from './pages/HomePage.jsx'
import Piano from './pages/Piano.jsx'
import VKeyboard from './pages/VKeyboard.jsx'
import Animals from './components/Animals.jsx'
import Birds from './components/Birds.jsx'
import MusicInstruments from './components/MusicInstruments.jsx'

function App() {
  
  
  return (
    <Router>
    <div className="app-container min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/keyboard" element={<VKeyboard />} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/birds' element= {<Birds />} />
        <Route path='/musical-instruments' element= {<MusicInstruments />} />
        
      </Routes>
    </div>
  </Router>
  )
}

export default App
