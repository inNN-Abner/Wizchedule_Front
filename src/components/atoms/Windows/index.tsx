import React from 'react'
import { DefineWindow } from './styles'

interface WindowsProps {
    bg?: string
    wdt?: string
    dir?: string
    hgt?: string
    mgtop?: string
    bdrd?: string
    bdrdBL?: string
    bdrdBR?: string
    bdrdTL?: string
    bdrdTR?: string
    align?: string
    justify?: string
    children?: React.ReactNode
}

export const Windows = ({ dir, justify, align, bg, mgtop, wdt, hgt, bdrd, bdrdBL, bdrdBR, bdrdTR, bdrdTL, children }: WindowsProps) => {
    return (
        <DefineWindow
        mgtop={mgtop}
        dir={dir}
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdrd={bdrd}
        bdrdBL={bdrdBL}
        bdrdBR={bdrdBR}
        bdrdTL={bdrdTL}
        bdrdTR={bdrdTR}
        align={align}
        justify={justify}
        children={children}
        />
    )
}