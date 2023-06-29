import { createContext, useState, useEffect } from 'react'
import { getAllItems } from '@/services/itemServices'
// import { useNavigate } from 'react-router-dom'

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
//   const navigate = useNavigate()
  const [searchItem, setSearchItem] = useState('')
  const [itemsData, setItemsData] = useState([])
  const [loading, setLoading] = useState(true)
  const handleSearch = (event) => {
    setSearchItem(event.target.value)
  }
  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItems()
        if (response.status === 200) {
          setItemsData(response.data)
          setLoading(false)
        //   navigate('/')
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemData()
  }, [])
  return (
    <SearchContext.Provider value={{ handleSearch, searchItem, itemsData, loading }}>
      {children}
    </SearchContext.Provider>
  )
}
export {
  SearchContext,
  SearchProvider
}
