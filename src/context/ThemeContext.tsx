import React from 'react'
import {theme} from '../themes/default'

interface ThemeContextInterface {
  theme: any
  mode?: string | null
  toggleMode?: any
}

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: theme })

interface ThemeProviderProps {
  children: React.ReactNode
  value?: any
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}