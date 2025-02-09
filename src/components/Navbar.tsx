import { useHarryPotter } from '@/contexts/useHarryPotter'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { preferredHouse } = useHarryPotter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`p-4 shadow-lg ${
        preferredHouse === 'Gryffindor'
          ? 'bg-red-600'
          : preferredHouse === 'Slytherin'
          ? 'bg-green-600'
          : preferredHouse === 'Hufflepuff'
          ? 'bg-yellow-500'
          : preferredHouse === 'Ravenclaw'
          ? 'bg-blue-600'
          : 'bg-gray-800'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-white text-2xl font-bold'>
          Harry Potter App
        </Link>

        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
            aria-label='Toggle Menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className='hidden md:flex space-x-6'>
          <li>
            <Link
              to='/'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/characters'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Characters
            </Link>
          </li>
          <li>
            <Link
              to='/students'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              to='/staff'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Staff
            </Link>
          </li>
          <li>
            <Link
              to='/spells'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Spells
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className='md:hidden mt-4'>
          <ul className='flex flex-col space-y-4'>
            <li>
              <Link
                to='/'
                className='block text-white hover:text-gray-300 transition duration-300'
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/characters'
                className='block text-white hover:text-gray-300 transition duration-300'
                onClick={toggleMenu}
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
                to='/students'
                className='block text-white hover:text-gray-300 transition duration-300'
                onClick={toggleMenu}
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                to='/staff'
                className='block text-white hover:text-gray-300 transition duration-300'
                onClick={toggleMenu}
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                to='/spells'
                className='block text-white hover:text-gray-300 transition duration-300'
                onClick={toggleMenu}
              >
                Spells
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
