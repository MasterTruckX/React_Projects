import { useAuthContext } from '@/hooks/useAuth'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSearchContext } from '@/hooks/useSearch'
import { getSingleUserService } from '@/services/userService'
import { useState, useEffect } from 'react'
import './header.scss'

// import { useState, useEffect } from 'react'
// import { getSingleUserService } from '@/services/userService'
// import logo from '@/assets/JayShop.jpg'
// Documentación de NavLink:  https://reactrouter.com/en/main/components/nav-link
// NavLink es un tipo especial de Link, que me permite gestionar estilos en función de la ruta activa (isActive)

// const Header = ({ searchProduct, handleSearch }) => {
const Header = () => {
  const { handleSearch, searchItem } = useSearchContext()
  const { isAuth, logout, userPayload } = useAuthContext()
  const navigate = useNavigate()
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
  }, [userPayload?.id])

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <nav className='header'>
      <div className='header__logo-container'>
        <NavLink to='/' className='header__logo'><b>Jay</b><i>Shop</i></NavLink>
      </div>
      <div className='header__form-container'>
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
      </div>
      <div className='header__navlist-username-container'>

        <div className='header__navList-container'>
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
                </>
                )}
          </ul>
        </div>
        <div className='header__userName-container'>
          {isAuth
            ? <p style={{ color: '#f788ad', textAlign: 'center' }}>Welcome Back! {userData.first_name}</p>
            : <p style={{ color: '#666666' }}>Login to your account or Sigup for a new account</p>}
        </div>
      </div>
    </nav>
  )
}
export default Header
