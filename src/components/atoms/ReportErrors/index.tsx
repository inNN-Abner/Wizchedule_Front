import React from 'react'
import { ErrorMessage } from './styles'

interface ReportErrorPros {
    children: string
    color?: string
    mgtop?: string
    ftSz?: string
    ftWgt?: string
    ftype?: string
    mgleft?: string
    jtCt?: string
}

export const LoginError = ({ children, mgtop, ftype, color, ftSz, jtCt }: ReportErrorPros) => {
    return (
        <ErrorMessage
        mgtop={mgtop}
        ftype={ftype}
        color={color}
        ftSz={ftSz}
        >
            {children}
        </ErrorMessage>
    )
}

export const SignupError = ({ children, mgtop, ftype, color, ftSz, jtCt }: ReportErrorPros) => {
    return (
        <ErrorMessage
        mgtop={mgtop}
        ftype={ftype}
        color={color}
        ftSz={ftSz}
        >
            {children}
        </ErrorMessage>
    )
}