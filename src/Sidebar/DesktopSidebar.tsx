import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface DesktopSidebarProps {
    content: React.ReactChildren
}

export const DesktopSidebar = ({ content }: DesktopSidebarProps) => {
    const {
        theme: { sidebar },
    } = useContext(ThemeContext)
    return (
        <aside className={`${sidebar.base}`}>
            {content}
        </aside>
    );
};