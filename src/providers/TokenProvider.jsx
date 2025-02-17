import { createContext, useState } from 'react'

export const TokenContext = createContext()

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  const saveToken = (accessToken) => {
    setToken(accessToken)
  }

  return (
    <TokenContext.Provider value={{ token, saveToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenProvider
