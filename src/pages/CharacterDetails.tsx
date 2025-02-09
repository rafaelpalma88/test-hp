import noProfilePhoto from '@/assets/no-profile-photo.png'
import { Character } from '@/interfaces/Character'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export function CharacterDetails() {
  const { id } = useParams<{ id: string }>()
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://hp-api.onrender.com/api/character/${id}`
        )
        if (response.data && response.data.length > 0) {
          setCharacter(response.data[0])
        } else {
          setError('Character not found.')
        }
      } catch (err) {
        console.error(err)
        setError('Error loading character details.')
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  if (loading) return <p>Loading ...</p>
  if (error) return <p>{error}</p>
  if (!character) return <p>Character not found.</p>

  return (
    <>
      <Helmet title={character.name} />
      <div className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>{character.name}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex justify-center'>
            <img
              src={character.image || noProfilePhoto}
              alt={character.name}
              className='rounded-lg shadow-lg'
            />
          </div>
          <div className='space-y-4'>
            <p>
              <strong>Name:</strong> {character.name}
            </p>
            <p>
              <strong>Alternative names:</strong>{' '}
              {character?.alternate_names?.join(', ') || 'N/A'}
            </p>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>House:</strong> {character.house || 'N/A'}
            </p>
            <p>
              <strong>Birth date:</strong> {character.dateOfBirth || 'N/A'}
            </p>
            <p>
              <strong>Year of birth:</strong> {character.yearOfBirth || 'N/A'}
            </p>
            <p>
              <strong>Wizard:</strong> {character.wizard ? 'Sim' : 'Não'}
            </p>
            <p>
              <strong>Ancestry:</strong> {character.ancestry || 'N/A'}
            </p>
            <p>
              <strong>Eye color:</strong> {character.eyeColour || 'N/A'}
            </p>
            <p>
              <strong>Hair color:</strong> {character.hairColour || 'N/A'}
            </p>
            <p>
              <strong>Wand:</strong>{' '}
              {character.wand
                ? `${character.wand.wood}, ${character.wand.core}, ${character.wand.length}cm`
                : 'N/A'}
            </p>
            <p>
              <strong>Patronous:</strong> {character.patronus || 'N/A'}
            </p>
            <p>
              <strong>Hogwarts student:</strong>{' '}
              {character.hogwartsStudent ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Hogwarts Staff:</strong>{' '}
              {character.hogwartsStaff ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Actor:</strong> {character.actor || 'N/A'}
            </p>
            <p>
              <strong>Alive:</strong> {character.alive ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
