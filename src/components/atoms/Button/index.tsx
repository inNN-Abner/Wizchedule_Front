import React from 'react';
import { ButtonText, StyledButton } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';

//Criando interface
interface ButtonProps {
    label: string
    onPress?: () => void
    color?: string
    bg?: string
    mgtop?: string
    wdt?: string
    hgt?: string
    bdrd?: string
    source?: string
    mgleft?: string
    children?: React.ReactNode
}

export const StylezedButton = ({ label, color, bg, mgtop, onPress }: ButtonProps ) => {
    return (
    <StyledButton 
        bg={bg}
        mgtop={mgtop}
        onPress={onPress}>
            <ButtonText
                color={color}>
                {label}
            </ButtonText>
    </StyledButton>
    )
}

export const EditButton = ({ bg, wdt, hgt, bdrd, children, mgleft, mgtop, onPress }: ButtonProps ) => {
    return (
    <StyledButton
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdrd={bdrd}
        mgleft={mgleft}
        mgtop={mgtop}
        onPress={onPress}>
    {children}</StyledButton>
    )
}