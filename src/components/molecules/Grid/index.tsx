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
    align?: string
    pdd?: string
}

export const PerfilGridSkeleton = ({ align, ftSz, mgleft, color, ftype, bg, mgtop, wdt, hgt, bdrd, children, pdd }: GridProps) => {
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
            align={align}
            pdd={pdd}
        >{children}</Grid>
    )
}