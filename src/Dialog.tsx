import React from 'react'
import { Dialog as HDialog } from '@headlessui/react'

export interface DialogProps {
    open: boolean;
    onClose: (value: boolean) => void;
    title: string;
    description: string;
    children: React.ReactChildren
}

export const Dialog = ({ open, onClose, title, description, children }: DialogProps) => {
    return (
        <HDialog open={open} onClose={onClose}>
            <HDialog.Overlay />

            <HDialog.Title>{title}</HDialog.Title>
            <HDialog.Description>
                {description}
            </HDialog.Description>
            {children}
        </HDialog>
    )
}
