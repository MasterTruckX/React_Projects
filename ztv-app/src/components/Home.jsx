import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// {"id":1,"url":"https://www.tvmaze.com/shows/1/under-the-dome","name":"Under the Dome","type":"Scripted","language":"English",
// "genres":["Drama","Science-Fiction","Thriller"],"status":"Ended","runtime":60,"averageRuntime":60,"premiered":"2013-06-24",
// "ended":"2015-09-10","officialSite":"http://www.cbs.com/shows/under-the-dome/","schedule":{"time":"22:00","days":["Thursday"]},
// "rating":{"average":6.5},"weight":99,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":"https://www.cbs.com/"},
// "webChannel":null,"dvdCountry":null,"externals":{"tvrage":25988,"thetvdb":264492,"imdb":"tt1553656"},
// "image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
// "original":"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},
// "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off
// from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from
// and if and when it will go away.</p>","updated":1631010933,"_links":{"self":{"href":"https://api.tvmaze.com/shows/1"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/185054"}}}

const Home = () => {
  const [zeries, setZeries] = useState([])
  const [searchTitle, setSearchTitle] = useState('') // Palabra a buscar
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows?limit=15')
      .then(response => response.json())
      .then(data => setZeries(data))
      .catch(error => console.error(error))
  }, [])

  const handleSearch = (event) => {
    setSearchTitle(event.target.value)
  }
  const filteredZeries = zeries.filter(zerie => {
    return zerie.name.toLowerCase().includes(searchTitle.toLowerCase())
  })
  //   https://api.tvmaze.com/shows/${zerie.id}/images
  return (
    <div>
      <h1>Zeries TV</h1>
      <form>
        <input
          type='text'
          placeholder='What are you watching next?'
          id='search'
          value={searchTitle}
          onChange={handleSearch}
        />
      </form>
      <div className='row'>
        {
            filteredZeries.map(zerie => (
              <div className='col-sm-4 mb-4' key={zerie.id}>
                <div className='card'>
                  <img src={`${zerie.image.medium}`} className='card-img-top' alt={zerie.name} />
                  <div className='card-body'>
                    <Link to={`/zerie/${zerie.id}`}>
                      <h5 className='card-title'>{zerie.name}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>

  )
}

export default Home
