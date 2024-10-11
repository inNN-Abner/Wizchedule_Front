import React from 'react'
import { TitleText, TitleInput, HeaderText, ContactInfoText, ContactNameText } from './styles'

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
    pddleft?: string
}

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

export const SubtitleText = ({ pddleft, mgleft, ftSz, color, children, mgtop, alignSelf }: TextProps) => {
    return (
        <TitleInput
        ftSz={ftSz}
        color={color}
        mgtop={mgtop}
        mgleft={mgleft}
        pddleft={pddleft}
        alignSelf={alignSelf}
        > {children}
        </TitleInput>
    )
}

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