import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/Theme'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const TableContainer = React.forwardRef<HTMLDivElement, Props>(function TableContainer(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableContainer },
  } = useContext(ThemeContext)

  return (
    <div className={classNames(tableContainer.base, className)} ref={ref} {...other}>
      {children}
    </div>
  )
})