import React from 'react'
import { TitleText, TitleInput, HeaderText } from './styles'

//Criando interface
interface TextProps {
    children: string
    color?: string
    mgtop?: string
    alignSelf?: string
    ftSz?: string
    ftWgt?: string
}

//Componente genérico de texto
export const LoginText = ({ children, mgtop }: TextProps) => {
    return (
        <TitleText
        mgtop={mgtop}>
            {children}
        </TitleText>
    )
}

//Componente genérico de texto
export const SubtitleText = ({ children, mgtop, alignSelf }: TextProps) => {
    return (
        <TitleInput
        mgtop={mgtop}
        alignSelf={alignSelf}>
            {children}
        </TitleInput>
    )
}

//Componente genérico de texto
export const HeaderTexts = ({ children, mgtop, alignSelf, ftSz, ftWgt, color }: TextProps) => {
    return (
        <HeaderText
        mgtop={mgtop}
        alignSelf={alignSelf}
        ftSz={ftSz}
        ftWgt={ftWgt}
        color={color}>
            {children}
        </HeaderText>
    )
}