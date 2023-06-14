import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/Index'
import '@/App.css'
import Header from './components'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
