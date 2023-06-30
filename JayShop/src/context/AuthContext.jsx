import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
// https://www.npmjs.com/package/jwt-decode

// #1 crear contexto
const AuthContext = createContext()

// #2 Crear el proveedor del contexto
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false) // Estos autenticado?
  const [userPayload, setUserPayload] = useState(null) // Datos del usuario autenticado

  const login = (token) => {
    // Guardamo el token en el local storage del navegador
    localStorage.setItem('token', token)
    // Decodificamos el token pata obtener los datos del usuario
    const decoded = jwtDecode(token)
    setUserPayload(decoded)
    setIsAuth(true)
  }
  const logout = () => {
    // Eliminamos el token del local storage del navegador
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuth(false)
  }

  useEffect(() => {
    // recuperamos el token, si no existe devolvera null
    const token = localStorage.getItem('token')
    if (token) {
      // Decodificamos el token para obtener los datos del usuario
      const decoded = jwtDecode(token)
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, userPayload, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
