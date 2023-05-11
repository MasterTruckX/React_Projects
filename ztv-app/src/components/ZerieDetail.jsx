import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ZerieDetail = () => {
  const { id } = useParams()
  const [zerie, setZerie] = useState(null)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setZerie(data))
      .catch(error => console.error(error))
  }, [id])

  if (!zerie) {
    return <div>Cargando...</div>
  }

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{zerie.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={`${zerie.image.medium}`} alt={zerie.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <h2>Synopsis</h2>
              <div>{zerie.summary}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ZerieDetail
