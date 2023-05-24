import { useState, useEffect } from 'react'
import EpisodeCard from './EpisodeCard'
// [{"id":1,"url":"https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot","name":"Pilot","season":1,"number":1,
// "type":"regular","airdate":"2013-06-24","airtime":"22:00","airstamp":"2013-06-25T02:00:00+00:00","runtime":60,
// "rating":{"average":6.8},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
// "original":"https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"},
// "summary":"<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out,
// they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>","_links":{"self":{"href":"https://api.tvmaze.com/episodes/1"},
// "show":{"href":"https://api.tvmaze.com/shows/1"}}}

const EpisodeDetail = ({ id }) => {
  const [season, setSeason] = useState([])
  const [selected, setSelected] = useState(null)
  const sendSeason = () => {
    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then(response => response.json())
      .then(season => setSeason(season))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    sendSeason()
  }, [])

  // collapse Season button displaying Episode cards https://getbootstrap.com/docs/5.3/components/collapse/

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <div className='wrapper'>
      <div className='accordion'>
        {season.map((cap, i) => (
          <div className='item' key={cap.id}>
            <div className='title' onClick={() => toggle(i)}>
              <h4>Season {`${cap.number}`}</h4>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <EpisodeCard id={id} season={cap.number} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EpisodeDetail
