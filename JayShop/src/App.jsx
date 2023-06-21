import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/Index'
import '@/App.css'
import Header from './components/Header'
import { AuthProvider } from '@/context/AuthContext'
import LoginPopup from './components/Header/LoginPopup/LoginPopup'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <LoginPopup />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
