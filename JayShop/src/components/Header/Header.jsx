import { useAuthContext } from '@/hooks/useAuth'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSearchContext } from '@/hooks/useSearch'
import './header.scss'

// import { useState, useEffect } from 'react'
// import { getSingleUserService } from '@/services/userService'
// import logo from '@/assets/JayShop.jpg'
// Documentación de NavLink:  https://reactrouter.com/en/main/components/nav-link
// NavLink es un tipo especial de Link, que me permite gestionar estilos en función de la ruta activa (isActive)

// const Header = ({ searchProduct, handleSearch }) => {
const Header = () => {
  const { handleSearch, searchItem } = useSearchContext()
  const { isAuth, logout } = useAuthContext()
  const navigate = useNavigate()
  // const [userData, setUserData] = useState({})
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await getSingleUserService(userPayload.id)
  //       if (response.status === 200) {
  //         setUserData(response.data)
  //       }
  //     } catch (error) {
  //       console.log('Ocurrio un error:', error.message)
  //     }
  //   }
  //   fetchUserData()
  // }, [userPayload.id])

  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'><b>Jay</b><i>Shop</i></NavLink>
      <form onSubmit={(event) => { event.preventDefault() }}>
        <input
          className='header__searchBar'
          type='text'
          placeholder='What are you looking for?  '
          id='search'
          value={searchItem}
          onChange={handleSearch}
        />
        <button
          className='header__searchBtn'
          onClick={() => navigate('/')}
        >GO
        </button>
      </form>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink
            to='/'
            className={({ isActive }) => linkIsActive(isActive)}
          >Home
          </NavLink>
        </li>
        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) => linkIsActive(isActive)}
                >Dashboard
                </NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink
                  to='/secret'
                  className={({ isActive }) => linkIsActive(isActive)}
                >Secret
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/'
                  className='header__item-link'
                  onClick={logout}
                >Logout
                </NavLink>
              </li>
              {/* <div style={{ color: '#f788ad' }} data-bs-container='body' data-bs-toggle='popover' data-bs-placement='bottom'>{userData?.first_name && <p>Welcome Back, {userData.first_name}</p>}</div> */}
              <div style={{ color: '#f788ad' }} data-bs-container='body' data-bs-toggle='popover' data-bs-placement='bottom'><p>Welcome Back, @User </p></div>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/login'
                  className={({ isActive }) => linkIsActive(isActive)}
                >Login
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/signup'
                  className={({ isActive }) => linkIsActive(isActive)}
                >Signup
                </NavLink>
              </li>
              <div style={{ color: '#555555' }} data-bs-container='body' data-bs-toggle='popover' data-bs-placement='bottom'>Login to your account or Sigup for a new account
              </div>
            </>
            )}
      </ul>
    </nav>
  )
}
export default Header
