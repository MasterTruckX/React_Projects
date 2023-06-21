import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Home, Login, Secret, Signup } from '@/pages'
import { useAuthContext } from '@/hooks/useAuth'
import ProductDetails from '@/pages/ProductDetail/'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/dashboard'
        element={
        isAuth
          ? <Dashboard />
          : <Navigate to='/login' />
       }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/items/:id' element={<ProductDetails />} />
    </Routes>

  )
}

export default RoutesIndex
