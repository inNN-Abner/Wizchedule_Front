import React from 'react'
import { ItemListView } from './styles'

interface WindowsProps {
    bg?: string
    wdt?: string
    dir?: string
    hgt?: string
    mgtop?: string
    mgleft?: string
    bdrd?: string
    bdrdBL?: string
    bdrdBR?: string
    bdrdTL?: string
    bdrdTR?: string
    align?: string
    justify?: string
    children?: React.ReactNode
}

export const GridOptions = ({ dir, justify, align, bg, mgtop, mgleft, wdt, hgt, bdrd, bdrdBL, bdrdBR, bdrdTR, bdrdTL, children }: WindowsProps) => {
    return (
        <ItemListView
        mgtop={mgtop}
        mgleft={mgleft}
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