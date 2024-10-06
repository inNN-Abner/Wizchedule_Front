import React from 'react'
import { TitleText, TitleInput, HeaderText, ContactInfoText, ContactNameText } from './styles'

//Criando interface
interface TextProps {
    children: string
    wdt?: string
    color?: string
    alignSelf?: string
    ftSz?: string
    ftWgt?: string
    ftype?: string
    mgtop?: string
    mgleft?: string
}

//Componente genérico de texto
export const GenericText = ({ children, mgtop, ftype, color, ftSz, mgleft }: TextProps) => {
    return (
        <TitleText
        mgtop={mgtop}
        ftype={ftype}
        color={color}
        ftSz={ftSz}
        mgleft={mgleft}
        > {children}
        </TitleText>
    )
}

//Componente genérico de subtitle
export const SubtitleText = ({ children, mgtop, alignSelf }: TextProps) => {
    return (
        <TitleInput
        mgtop={mgtop}
        alignSelf={alignSelf}
        > {children}
        </TitleInput>
    )
}

//Componente genérico de título
export const HeaderTexts = ({ children, wdt, mgleft, mgtop, alignSelf, ftSz, ftWgt, color }: TextProps) => {
    return (
        <HeaderText
        mgtop={mgtop}
        mgleft={mgleft}
        alignSelf={alignSelf}
        ftSz={ftSz}
        ftWgt={ftWgt}
        color={color}
        wdt={wdt}
        > {children}
        </HeaderText>
    )
}

//Componente genérico de nome de contatos
export const ContactName = ({ children, color, ftype, ftWgt, ftSz, mgtop, mgleft }: TextProps) => {
    return (
        <ContactNameText
        color={color}
        ftype={ftype}
        ftWgt={ftWgt}
        ftSz={ftSz}
        mgtop={mgtop}
        mgleft={mgleft}
        > {children}
        </ContactNameText>
    )
}

//Componente genérico de informações de contatos
export const ContactInfo = ({ children, color, ftype, ftWgt, ftSz, mgtop, mgleft }: TextProps) => {
    return (
        <ContactInfoText
        color={color}
        ftype={ftype}
        ftWgt={ftWgt}
        ftSz={ftSz}
        mgtop={mgtop}
        mgleft={mgleft}
        > {children}
        </ContactInfoText>
    )
}