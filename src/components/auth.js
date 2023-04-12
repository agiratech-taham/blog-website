import { useState, createContext, useContext } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setUser] = useState(null);

  const login = (user) => {
    console.log('user', user)

    setUser({...user});
    console.log('auth', auth)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if(context === undefined) throw new Error("You must provide")
  return context
}