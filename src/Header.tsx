import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

export interface HeaderProps {
    children: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
    const {
        theme: { header },
    } = useContext(ThemeContext)
    return (
        <header className={`${header.base}`}>
            <div className={`${header.container}`}>
                {children}
            </div>
        </header>
    )
}