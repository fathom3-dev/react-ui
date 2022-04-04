import React, { MouseEventHandler } from 'react'
import { FiX } from 'react-icons/fi';
import Drawer from 'rc-drawer';

export interface PanelDrawerProps {
    open: boolean;
    position: 'left' | 'right';
    children: React.ReactChildren;
    onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
    onCloseIcon: MouseEventHandler<HTMLButtonElement>
    showCloseIcon: boolean;
}

export const PanelDrawer = ({ open, position = 'right', children, onClose, onCloseIcon, showCloseIcon }: PanelDrawerProps) => {
    return (
        <Drawer
            open={open}
            onClose={onClose}
            placement={position}
        >
            {showCloseIcon ?
                <button
                    onClick={onCloseIcon}
                    className="absolute focus:outline-none z-50 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center"
                >
                    <FiX className="mx-auto" />
                </button>
                :
                null
            }

            <div className="flex flex-col w-full h-full justify-between">
                {children}
            </div>
        </Drawer>
    )
}