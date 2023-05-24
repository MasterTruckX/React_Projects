import { useState, useEffect } from 'react'
import parse from 'html-react-parser'

const EpisodeCard = ({ id, season }) => {
  const [episode, setEpisode] = useState([])
  const sendEpisode = () => {
    fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then(response => response.json())
      .then(episode => {
        setEpisode(episode.filter(capi => capi.season === season))
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    sendEpisode()
  }, [])

  return (
    <div className='row'>
      {episode.map(chapter => (
        <div className='card' key={chapter.id}>
          <div className='card-body'>
            <h5 className='card-title'>{`Episode ${chapter.number}`}</h5>
            <h6 className='card-subtitle mb-2 text-body-secondary'>{`${chapter.name}`}</h6>
            <p className='card-text'>{parse(chapter.summary)}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default EpisodeCard
