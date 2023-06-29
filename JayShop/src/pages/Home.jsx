// import { useState, useEffect } from 'react'
// import { getAllItems } from '@/services/itemServices'
import '@/styles/home.scss'
// import Header from '@/components/Header'
import { Link } from 'react-router-dom'
import { useSearchContext } from '@/hooks/useSearch'
import { useAuthContext } from '@/hooks/useAuth'
import { Tooltip } from '@mui/material'
const Home = () => {
  const { loading, itemsData, searchItem } = useSearchContext()
  const { isAuth } = useAuthContext()
  // const [itemsData, setItemsData] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [searchProduct, setSearchProduct] = useState('') // Palabra a buscar
  // const handleSearch = (event) => {
  //   setSearchProduct(event.target.value)
  // }
  const filteredProducts = itemsData.filter(product => {
    return product.product_name.toLowerCase().includes(searchItem.toLowerCase())
  })

  // useEffect(() => {
  //   const fetchItemData = async () => {
  //     try {
  //       const response = await getAllItems()
  //       if (response.status === 200) {
  //         setItemsData(response.data)
  //         setLoading(false)
  //       }
  //     } catch (error) {
  //       console.log('Ocurrio un error:', error.message)
  //     }
  //   }
  //   fetchItemData()
  // }, [])

  return (
    <>
      <div className='Home'>
        <h1><i>Home</i></h1>
        {/* <Header searchProduct={searchProduct} handleSearch={handleSearch} /> */}
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
          {
        loading
          ? <h1>Cargando...</h1>
          : filteredProducts.map((product) => (
            <div className='card' style={{ width: '18rem' }} key={product.id}>
              <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image} alt={product.product_name} />
              <div className='card-body'>
                <h5 className='card-title'><Link to={`/items/${product.id}`} style={{ color: '#000000' }}>{product.product_name}</Link></h5>
                <p className='card-text' style={{ color: '#666666' }}>{product.description}</p>
                {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
                {
                  isAuth
                    ? <button type='button' className='Home__buyBtn--buyLink'>Buy</button>
                    : <Tooltip title='Login or Signup to purchase' placement='right' arrow><button type='button' className='btn btn-secondary' data-bs-toggle='popover' data-bs-placement='right' data-bs-content='Login to purchase or Signup'>Buy</button></Tooltip>
                }

              </div>
            </div>
          ))
}
        </div>
      </div>
    </>
  )
}
export default Home
