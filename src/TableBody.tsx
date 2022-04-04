import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import classNames from 'classnames'

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody = React.forwardRef<HTMLTableSectionElement, Props>(function TableBody(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableBody },
  } = useContext(ThemeContext)

  return (
    <tbody className={classNames(tableBody.base, className)} ref={ref} {...other}>
      {children}
    </tbody>
  )
})