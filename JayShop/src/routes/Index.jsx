import { Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Login, Secret, Signup } from '@/pages'
import ProductDetails from '@/pages/ProductDetail/'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/items/:id' element={<ProductDetails />} />
    </Routes>

  )
}

export default RoutesIndex
