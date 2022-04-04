import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLTableRowElement> { }

export const TableRow = React.forwardRef<HTMLTableRowElement, Props>(function TableRow(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableRow },
  } = useContext(ThemeContext)

  return (
    <tr className={classNames(tableRow.base, className)} ref={ref} {...other}>
      {children}
    </tr>
  )
})