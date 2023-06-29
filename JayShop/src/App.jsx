import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/Index'
import '@/App.css'
import Header from './components/Header'
import { AuthProvider } from '@/context/AuthContext'
import { SearchProvider } from './context/SearchContext'

function App () {
  return (
    <>
      <AuthProvider>
        <SearchProvider>
          <BrowserRouter>
            <Header />
            <RoutesIndex />
          </BrowserRouter>
        </SearchProvider>
      </AuthProvider>
    </>
  )
}

export default App
