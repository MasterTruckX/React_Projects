import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '@/services/itemServices'
import { useAuthContext } from '@/hooks/useAuth'
import { Tooltip } from '@mui/material'
import './productDetail.scss'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const { isAuth } = useAuthContext()
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
        <h1 className='product-details__p--name'><i>{product.product_name}</i></h1>
        <img className='card-img-top' style={{ maxHeight: '300px', maxWidth: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto', borderWidth: '5px', borderStyle: 'solid', borderColor: '#555555' }} src={product.image} alt={product.product_name} />
        <p>{product.description}</p>
        <p className='product-details__p--price'><b>$</b>{product.price}</p>
        <p className='product-details__p--category'><b>Category: </b>{product.category}</p>
        <p className='product-details__p--brand'><b>Brand: </b>{product.brand}</p>
        <p className='product-details__p--sku'><b>Sku: </b>{product.sku}</p>
        {
          isAuth
            ? <button type='button' className='product-details__btn-comprar'>Buy</button>
            : <Tooltip title='Login or Signup to purchase' placement='right' arrow><button type='button' className='btn btn-secondary' data-bs-toggle='popover' data-bs-placement='right' data-bs-content='Login to purchase or Signup'>Buy</button></Tooltip>
        }
      </div>
    </>

  )
}

export default ProductDetails
