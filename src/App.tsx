import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { CharacterDetails } from './pages/CharacterDetails'
import { Characters } from './pages/Characters'
import { Home } from './pages/Home'
import { Spells } from './pages/Spells'
import { Staff } from './pages/Staff'
import { Students } from './pages/Students'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Helmet titleTemplate='%s | Harry Potter App' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/students' element={<Students />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/spells' element={<Spells />} />
          <Route path='/character/:id' element={<CharacterDetails />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
