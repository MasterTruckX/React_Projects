import { useState, useEffect } from 'react'

const Cast = ({ id }) => {
  const [cast, setCast] = useState([])

  const sendCast = () => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(response => response.json())
      .then(cast => setCast(cast))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    sendCast()
  }, [])

  // useEffect(() => {
  //   fetch(`https://api.tvmaze.com/shows/${id}/cast`)
  //     .then(response => response.json())
  //     .then(data => setCast(data.results))
  //     .catch(error => console.error(error))
  // })
  console.log(cast)
  return (
    <div className='col-md-12'>
      <h3>Cast</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Actor</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {cast.map(person => (
            <tr key={person.person._links.self.href}>
              <td>{person.person.name}</td>
              <td>{person.character.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cast
