import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useHarryPotter } from '@/contexts/useHarryPotter'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export function Spells() {
  const { spells, loading, error } = useHarryPotter()

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  const clearSearch = () => {
    setSearchTerm('')
    setCurrentPage(1)
  }

  const filteredSpells = spells.filter((spell) =>
    spell.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredSpells.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const totalPages = Math.ceil(filteredSpells.length / itemsPerPage)
  const maxPagesToShow = 5
  let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1)
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages)

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(endPage - maxPagesToShow + 1, 1)
  }

  const pageNumbers = []
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <>
      <Helmet title='Spells' />
      <div className='App p-4 sm:p-8'>
        <h1 className='text-2xl font-bold mb-4'>Spells</h1>

        <div className='mb-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-2'>
          <Input
            type='text'
            placeholder='Pesquisar por nome...'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className='w-full sm:max-w-md'
          />
          <Button
            variant='outline'
            onClick={clearSearch}
            disabled={!searchTerm}
            className='w-full sm:w-auto'
          >
            Limpar
          </Button>
        </div>

        <div className='hidden sm:block rounded-md border overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead style={{ width: '30%' }}>Name</TableHead>
                <TableHead style={{ width: '60%' }}>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className='text-center py-4 text-gray-600'
                  >
                    No results available.
                  </TableCell>
                </TableRow>
              ) : (
                currentItems.map((spell) => (
                  <TableRow key={spell.id}>
                    <TableCell>{spell.name || 'N/A'}</TableCell>
                    <TableCell>{spell.description || 'N/A'}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className='sm:hidden space-y-4'>
          {currentItems.length === 0 ? (
            <div className='text-center py-4 text-gray-600'>
              No results available.
            </div>
          ) : (
            currentItems.map((spell) => (
              <div key={spell.id} className='p-4 border rounded-lg shadow-sm'>
                <div className='space-y-2'>
                  <div className='font-bold'>{spell.name || 'N/A'}</div>
                  <div>{spell.description || 'N/A'}</div>
                </div>
              </div>
            ))
          )}
        </div>

        <Pagination className='mt-4'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                isActive={currentPage === 1}
              />
            </PaginationItem>
            {pageNumbers.map((number) => (
              <PaginationItem key={number}>
                <PaginationLink
                  onClick={() => paginate(number)}
                  isActive={currentPage === number}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                isActive={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}
