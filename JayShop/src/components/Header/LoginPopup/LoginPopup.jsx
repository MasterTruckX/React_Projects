import { useAuthContext } from '@/hooks/useAuth'
const LoginPopup = () => {
  const isAuth = useAuthContext()
  return (
    <div>
      {isAuth
        ? (console.log('Login @YourName'))
        : (console.log('Not Login'))}
    </div>
  )
}

export default LoginPopup
