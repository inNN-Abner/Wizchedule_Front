import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Ionicons } from '@expo/vector-icons'
import { ButtonText, StyledButton } from './styles'

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

export const StylezedButton = ({ bdrd, hgt, wdt, label, color, bg, mgtop, onPress }: ButtonProps ) => {
    return (
    <StyledButton 
        bg={bg}
        mgtop={mgtop}
        hgt={hgt}
        wdt={wdt}
        bdrd={bdrd}
        onPress={onPress}>
            <ButtonText
                color={color}>
                {label}
            </ButtonText>
    </StyledButton>
    )
}

export const DayButton = ({ hgt, label, color, bg, onPress }: ButtonProps ) => {
    return (
    <StyledButton 
        bdrd={'5'}
        wdt={'53'}
        hgt={hgt}
        mgtop={'0'}
        bg={'white'}
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