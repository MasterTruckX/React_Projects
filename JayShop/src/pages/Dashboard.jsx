import { useAuthContext } from '@/hooks/useAuth'
import { useState, useEffect } from 'react'
import { getSingleUserService } from '@/services/userService'
const Dashboard = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getSingleUserService(userPayload.id)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchUserData()
  }, [userPayload.id])
  return (
    <>
      <div style={{ marginTop: '135px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Dashboard</h1>
        {
        userData?.first_name && <p>First Name: {userData.first_name}</p>
      }
        {
        userData?.last_name && <p>Last Name: {userData.last_name}</p>
      }
        {
        userData?.gender && <p>Gender: {userData.gender}</p>
      }
        {
        userData?.email && <p>Email: {userData.email}</p>
      }
      </div>
    </>
  )
}

export default Dashboard
