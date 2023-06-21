import { NavLink } from 'react-router-dom'
import './header.scss'
// import logo from '@/assets/JayShop.jpg'
// Documentación de NavLink:  https://reactrouter.com/en/main/components/nav-link
// NavLink es un tipo especial de Link, que me permite gestionar estilos en función de la ruta activa (isActive)

const Header = ({ searchProduct, handleSearch }) => {
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'>JayShop</NavLink>
      <form onSubmit={(event) => { event.preventDefault() }}>
        <input
          className='header__searchBar'
          type='text'
          placeholder='What are you looking for?  '
          id='search'
          value={searchProduct}
          onChange={handleSearch}
        />
      </form>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink
            to='/'
            className={({ isActive }) => linkIsActive(isActive)}
          >Home
          </NavLink>
        </li>

        <li className='header__list-item'>
          <NavLink
            to='/dashboard'
            className={({ isActive }) => linkIsActive(isActive)}
          >Dashboard
          </NavLink>
        </li>
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
      </ul>
    </nav>
  )
}
export default Header
