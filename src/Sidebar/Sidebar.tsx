
import React from "react";
import { DesktopSidebar } from "./DesktopSidebar";

export interface  SidebarProps {
    children: React.ReactChildren
}

export const Sidebar = ({children}: SidebarProps) => {
    return (
      <>
        <DesktopSidebar content={children}/>
      </>
    );
  };
  