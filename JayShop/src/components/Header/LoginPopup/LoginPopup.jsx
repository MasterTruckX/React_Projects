import { useAuthContext } from '@/hooks/useAuth'
const LoginPopup = () => {
  const isAuth = useAuthContext()
  return (
    <div className='popup'>
      {isAuth
        ? <span className='popuptext' id='myPopup'>Welcome back!</span>
        : <span className='popuptext' id='myPopup'>Please Log in or Sign up for a new account.</span>}
    </div>

  )
}

export default LoginPopup
