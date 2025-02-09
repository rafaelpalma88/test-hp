import { useHarryPotter } from '@/contexts/useHarryPotter'
import { Helmet } from 'react-helmet-async'

export function Home() {
  const { preferredHouse, setPreferredHouse } = useHarryPotter()

  return (
    <>
      <Helmet title='Home' />
      <div className='min-h-screen bg-gray-100 p-4 sm:p-8'>
        <div className='text-center mb-8 sm:mb-12'>
          <h1 className='text-3xl sm:text-5xl font-bold text-gray-800 mb-4'>
            Harry Potter: Mischief Managed
          </h1>
          <p className='text-lg sm:text-xl text-gray-600'>
            Explore the magical world of Harry Potter! Discover characters,
            spells, students, staff and more.
          </p>
        </div>

        <div className='mt-8 sm:mt-12 text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4'>
            Choose your home
          </h2>
          <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <button
              onClick={() => setPreferredHouse('Gryffindor')}
              className='bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors'
            >
              Gryffindor
            </button>
            <button
              onClick={() => setPreferredHouse('Slytherin')}
              className='bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors'
            >
              Slytherin
            </button>
            <button
              onClick={() => setPreferredHouse('Hufflepuff')}
              className='bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors'
            >
              Hufflepuff
            </button>
            <button
              onClick={() => setPreferredHouse('Ravenclaw')}
              className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
            >
              Ravenclaw
            </button>
          </div>
          {preferredHouse && (
            <p className='mt-4 text-lg sm:text-xl text-gray-800'>
              You chose: <span className='font-bold'>{preferredHouse}</span>
            </p>
          )}
        </div>
      </div>
    </>
  )
}
