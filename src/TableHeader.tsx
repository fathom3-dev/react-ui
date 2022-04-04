import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHeader = React.forwardRef<HTMLTableSectionElement, Props>(function TableHeader(
  props,
  ref
) {
  const { className, children, ...other } = props

  const {
    theme: { tableHeader },
  } = useContext(ThemeContext)

  return (
    <thead className={classNames(tableHeader.base, className)} ref={ref} {...other}>
      {children}
    </thead>
  )
})