import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell = React.forwardRef<HTMLTableCellElement, Props>(function TableCell(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableCell },
  } = useContext(ThemeContext)

  return (
    <td className={classNames(tableCell.base, className)} ref={ref} {...other}>
      {children}
    </td>
  )
})