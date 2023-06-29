import { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'

// Paso 3. Crear un hook para usar el contexto
export const useSearchContext = () => {
  const context = useContext(SearchContext)

  if (context === undefined) {
    throw new Error('useSearchContext debe ser usado dentro de SearchProvider')
  }

  return context
}
