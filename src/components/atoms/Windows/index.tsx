import React from 'react'
import { DefineWindow } from './styles'

interface WindowsProps {
    bg?: string
    wdt?: string
    hgt?: string
    mgtop?: string
    bdrd?: string
    bdrdBL?: string
    bdrdBR?: string
    children?: React.ReactNode
}

export const Windows = ({ bg, mgtop, wdt, hgt, bdrd, bdrdBL, bdrdBR, children }: WindowsProps) => {
    return (
        <DefineWindow
        mgtop={mgtop}
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdrd={bdrd}
        bdrdBL={bdrdBL}
        bdrdBR={bdrdBR}
        children={children}
        />
    )
}