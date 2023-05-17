import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ZerieDetail from '../components/ZerieDetail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/zerie/:id' element={<ZerieDetail />} />
    </Routes>
  )
}

export default RoutesIndex
