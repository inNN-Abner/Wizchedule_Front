import React from 'react';
import { ButtonText, StyledButton } from './styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Fontisto from '@expo/vector-icons/Fontisto'
import { Ionicons } from '@expo/vector-icons'

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

export const EditButton = ({ bg, wdt, hgt, bdrd, mgleft, mgtop, onPress }: ButtonProps ) => {
    return (
    <StyledButton
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdrd={bdrd}
        mgleft={mgleft}
        mgtop={mgtop}
        onPress={onPress}>
    <FontAwesome name="pencil" size={24} color="black" /></StyledButton>
    )
}

export const TrashButton = ({ bg, wdt, hgt, bdrd, mgleft, mgtop, onPress }: ButtonProps ) => {
    return (
    <StyledButton
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdrd={bdrd}
        mgleft={mgleft}
        mgtop={mgtop}
        onPress={onPress}>
     <Fontisto name="trash" size={24} color="white" /></StyledButton>
    )
}

export const AddButton = ({ bg, wdt, hgt, bdrd, mgleft, mgtop, onPress }: ButtonProps ) => {
    return (
    <StyledButton
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdrd={bdrd}
        mgleft={mgleft}
        mgtop={mgtop}
        onPress={onPress}>
        <Ionicons name="add-circle" size={24} color="white" /></StyledButton>
    )
}