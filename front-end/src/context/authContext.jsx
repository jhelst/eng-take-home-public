import * as React from 'react'

const AuthContext = React.createContext({
  user: { token: '', detail: null },
})

export const useAuthUser = () => {
  const { user, getUser, setUser } = React.useContext(AuthContext)

  return { user, getUser, setUser }
}

const AuthContextProvider = ({
  children,
  user = { token: '', detail: null },
}) => {
  const getUser = () => user
  const [_user, setUser] = React.useState(user)

  return (
    <AuthContext.Provider value={{ user: _user, getUser, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
