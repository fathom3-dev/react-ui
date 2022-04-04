
   
import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const TableFooter = React.forwardRef<HTMLDivElement, Props>(function TableFooter(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableFooter },
  } = useContext(ThemeContext)

  return (
    <div className={classNames(tableFooter.base, className)} ref={ref} {...other}>
      {children}
    </div>
  )
})