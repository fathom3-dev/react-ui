import React, { useMemo } from 'react'
import { ThemeContext } from './context/ThemeContext';
import {theme} from './themes/default'
import { mergeDeep } from './utils/mergeDeep';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactChildren
  theme?: object
  dark?: boolean
  usePreferences?: boolean
}

export const F3DUI: React.FC<Props> = ({
  children,
  theme: customTheme
}) => {
  const mergedTheme = mergeDeep(theme, customTheme)

  const value = useMemo(
    () => ({
      theme: mergedTheme
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}