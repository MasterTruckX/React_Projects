import useForm  from '@/hooks/useForm'
import { registerNewItem } from '@/services/itemServices'
import { useNavigate } from 'react-router-dom'
const Secret = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const response = await registerNewItem(data)
      if (response.status === 201) {
        console.log('Item added', response.data)
        navigate('/secret')
      }
    } catch (error) {
      console.log('An error ocurred:', error.message)
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    product_name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    sku: '',
    image: ''
  })
  return (
    // <img src={`https://picsum.photos/seed/${selectedSong.id}/400/400`} alt='Portada del Disco' />
    <main className='form-signin w-100' style={{ marginTop: '135px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <p style={{ fontSize: '50px', color: '#f788ad' }}><b>J</b><i>s</i></p>
        <h1 className='h3 mb-3 fw-normal'>New Item Form</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='product_name'
            name='product_name'
            value={input.product_name}
            onChange={handleInputChange}
            placeholder='Everlasting Tire'
          />
          <label htmlFor='product_name'>Product Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            value={input.description}
            onChange={handleInputChange}
            placeholder='Non existing but gives hope'
          />
          <label htmlFor='description'>Description</label>
        </div>

        <div className='form-floating'>
          <input
            type='number'
            className='form-control'
            id='price'
            name='price'
            value={input.price}
            onChange={handleInputChange}
            placeholder='$0'
          />
          <label htmlFor='price'>Price</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='category'
            name='category'
            value={input.category}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='Books'>Books</option>
            <option value='Movies'>Movies</option>
            <option value='Music'>Music</option>
            <option value='Games'>Games</option>
            <option value='Electronics'>Electronics</option>
            <option value='Computers'>Computers</option>
            <option value='Home'>Home</option>
            <option value='Garden'>Garden</option>
            <option value='Tools'>Tools</option>
            <option value='Grocery'>Grocery</option>
            <option value='Health'>Health</option>
            <option value='Beauty'>Beauty</option>
            <option value='Toys'>Toys</option>
            <option value='Kids'>Kids</option>
            <option value='Baby'>Baby</option>
            <option value='Clothing'>Clothing</option>
            <option value='Shoes'>Shoes</option>
            <option value='Jewelery'>Jewelery</option>
            <option value='Sports'>Sports</option>
            <option value='Outdoors'>Outdoors</option>
            <option value='Automotive'>Automotive</option>
            <option value='Industrial'>Industrial</option>
          </select>
          <label htmlFor='category'>Category</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='brand'
            name='brand'
            value={input.brand}
            onChange={handleInputChange}
            placeholder='Goodyear'
          />
          <label htmlFor='brand'>Brand</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='sku'
            name='sku'
            value={input.sku}
            onChange={handleInputChange}
            placeholder='a3cbfae1-521c-48a3-b94e-7h1a31dj7ed1'
          />
          <label htmlFor='sku'>Sku</label>
        </div>

        <div className='form-floating'>
          {/* <select
            className='form-select'
            id='image'
            name='image'
            value={input.image}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value={`https://picsum.photos/seed/${randomNum(5000)}/300/300`}>Random</option>
            <option value=''>Random</option>
          </select>
          <label htmlFor='image'>Image</label> */}

          <input
            type='url'
            className='form-control'
            id='image'
            name='image'
            value={input.image}
            onChange={handleInputChange}
            placeholder='https://picsum.photos/seed/1/300/300'
          />
          <label htmlFor='image'>Image URL</label>
        </div>
        <h6 style={{ color: '#cccccc' }}>For random picture use: https://picsum.photos/seed/1/300/300</h6>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Add Item</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2023</p>
      </form>
    </main>
  )
}

export default Secret
