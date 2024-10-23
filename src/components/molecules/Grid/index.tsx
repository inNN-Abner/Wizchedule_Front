import React from 'react'
import { Grid } from './styles'

interface GridProps {
    bg?: string
    color?: string
    wdt?: string
    hgt?: string
    mgtop?: string
    bdrd?: string
    children?: React.ReactNode
    ftype?: string
    mgleft?: string
    ftSz?: string
}

export const PerfilGridSkeleton = ({ ftSz, mgleft, color, ftype, bg, mgtop, wdt, hgt, bdrd, children }: GridProps) => {
    return (
        <Grid
            mgtop={mgtop}
            color={color}
            bg={bg}
            wdt={wdt}
            hgt={hgt}
            bdrd={bdrd}
            ftype={ftype}
            ftSz={ftSz}
            mgleft={mgleft}
        >{children}</Grid>
    )
}