import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '@/services/itemServices'
import './productDetail.scss'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getSingleItem(id)
        if (response.status === 200) {
          setProduct(response.data)
        //   setLoading(false)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemData()
  }, [id])
  return (
    <>
      <div className='product-details'>
        <h1>ProductDetails</h1>
        <p>{product.product_name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.brand}</p>
        <p>{product.sku}</p>
        <button className='product-details__btn-comprar'>Comprar</button>
      </div>
    </>

  )
}

export default ProductDetails
