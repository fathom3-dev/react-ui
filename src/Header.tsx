import React, { useContext } from 'react'
import { ThemeContext } from './context/Theme'

export interface HeaderProps {
    children: React.ReactChildren
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