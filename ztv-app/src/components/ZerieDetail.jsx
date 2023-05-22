import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import Cast from './Cast'
import EpisodeDetail from './EpisodeDetail'

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
  // {"person":{"id":1,"url":"https://www.tvmaze.com/people/1/mike-vogel","name":"Mike Vogel","country":{"name":"United States","code":"US","timezone":"America/New_York"},
  //   "birthday":"1979-07-17","deathday":null,"gender":"Male","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg",
  // "original":"https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"},"updated":1672996558,"_links":{"self":{"href":"https://api.tvmaze.com/people/1"}}},
  // "character":{"id":1,"url":"https://www.tvmaze.com/characters/1/under-the-dome-dale-barbie-barbara",
  // "name":"Dale \"Barbie\" Barbara","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/3.jpg",
  //  "original":"https://static.tvmaze.com/uploads/images/original_untouched/0/3.jpg"},"_links":{"self":{"href":"https://api.tvmaze.com/characters/1"}}},"self":false,"voice":false},

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{zerie.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={`${zerie?.image?.medium}`} alt={zerie.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <h2>Synopsis</h2>
              <div>{parse(zerie.summary)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='episodes'>
        <h3>Episodes</h3>
        <EpisodeDetail id={id} />
      </div>
      <div className='cast'>
        <Cast id={id} />
      </div>
    </div>
  )
}
export default ZerieDetail
