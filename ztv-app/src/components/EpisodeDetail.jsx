import { useState, useEffect } from 'react'
import parse from 'html-react-parser'
// [{"id":1,"url":"https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot","name":"Pilot","season":1,"number":1,
// "type":"regular","airdate":"2013-06-24","airtime":"22:00","airstamp":"2013-06-25T02:00:00+00:00","runtime":60,
// "rating":{"average":6.8},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
// "original":"https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"},
// "summary":"<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out,
// they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>","_links":{"self":{"href":"https://api.tvmaze.com/episodes/1"},
// "show":{"href":"https://api.tvmaze.com/shows/1"}}}

const EpisodeDetail = ({ id }) => {
  const [season, setSeason] = useState([])
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

  return (
    <div>
      <p>
        {season.map(cap => (
          <button className='btn btn-primary' type='button' data-bs-toggle='collapse' data-bs-target='.multi-collapse' aria-expanded='false' aria-controls='multiCollapseExample1 multiCollapseExample2' key={cap.id}>Season {`${cap.number}`}</button>
        ))}
      </p>
      <div className='row'>
        <div className='col'>
          <div className='collapse multi-collapse'>
            <div className='card card-body'>
              Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='collapse multi-collapse' id='multiCollapseExample2'>
            <div className='card card-body'>
              Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EpisodeDetail
