import { Character } from '@/interfaces/Character'
import { Spell } from '@/interfaces/Spell'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

interface HarryPotterContextData {
  characters: Character[]
  students: Character[]
  staff: Character[]
  spells: Spell[]
  loading: boolean
  error: string | null
  preferredHouse: string
  setPreferredHouse: (house: string) => void
  selectedCharacter: Character | null
  setSelectedCharacter: (character: Character | null) => void
  favorites: string[]
  toggleFavorite: (characterId: string) => void
}

const HarryPotterContext = createContext<HarryPotterContextData>({
  characters: [],
  students: [],
  staff: [],
  spells: [],
  loading: false,
  error: null,
  preferredHouse: '',
  setPreferredHouse: () => {},
  selectedCharacter: null,
  setSelectedCharacter: () => {},
  favorites: [],
  toggleFavorite: () => {},
})

export const HarryPotterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [students, setStudents] = useState<Character[]>([])
  const [staff, setStaff] = useState<Character[]>([])
  const [spells, setSpells] = useState<Spell[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [preferredHouse, setPreferredHouse] = useState<string>('')
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  )
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem('@harry-potter-app-favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }

    const savedPreferredHouse = localStorage.getItem(
      '@harry-potter-app-preferred-house'
    )
    if (savedPreferredHouse) {
      setPreferredHouse(JSON.parse(savedPreferredHouse))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      '@harry-potter-app-favorites',
      JSON.stringify(favorites)
    )
  }, [favorites])

  useEffect(() => {
    localStorage.setItem(
      '@harry-potter-app-preferred-house',
      JSON.stringify(preferredHouse)
    )
  }, [preferredHouse])

  const toggleFavorite = (characterId: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(characterId)) {
        return prevFavorites.filter((id) => id !== characterId)
      } else {
        return [...prevFavorites, characterId]
      }
    })
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const [
        charactersResponse,
        studentsResponse,
        staffResponse,
        spellsResponse,
      ] = await Promise.all([
        axios.get('https://hp-api.onrender.com/api/characters'),
        axios.get('https://hp-api.onrender.com/api/characters/students'),
        axios.get('https://hp-api.onrender.com/api/characters/staff'),
        axios.get('https://hp-api.onrender.com/api/spells'),
      ])

      setCharacters(charactersResponse.data)
      setStudents(studentsResponse.data)
      setStaff(staffResponse.data)
      setSpells(spellsResponse.data)
    } catch (err) {
      console.error(err)
      setError('Erro ao carregar os dados. Tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <HarryPotterContext.Provider
      value={{
        characters,
        students,
        staff,
        spells,
        loading,
        error,
        preferredHouse,
        setPreferredHouse,
        selectedCharacter,
        setSelectedCharacter,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </HarryPotterContext.Provider>
  )
}

export default HarryPotterContext
