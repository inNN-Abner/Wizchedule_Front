import React from 'react'
import { ErrorMessage } from './styles'

//Criando interface
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

//Componente genérico de texto
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