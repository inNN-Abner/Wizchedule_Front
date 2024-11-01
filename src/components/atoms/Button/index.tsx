import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Ionicons } from '@expo/vector-icons'
import { ButtonText, StyledButton } from './styles'
import { PersonalIcon } from '../PersonalIcon'
import { ImageSourcePropType } from 'react-native'
import { SubContainer } from '../Container'

interface ButtonProps {
    label?: string
    modalidade?: string
    horario?: string
    onPress?: () => void
    color?: string
    bg?: string
    mgtop?: string
    mgright?: string;
    wdt?: string
    hgt?: string
    bdrd?: string
    source?: ImageSourcePropType
    mgleft?: string
    justify?: string
    align?: string
    ftSz?: string
    dir?: string
    children?: React.ReactNode
}

export const StylezedButton = ({ bdrd, hgt, wdt, label, color, bg, mgtop, mgleft, ftSz, mgright, onPress }: ButtonProps ) => {
    return (
    <StyledButton 
        bg={bg}
        mgtop={mgtop}
        mgleft={mgleft}
        mgright={mgright}
        hgt={hgt}
        wdt={wdt}
        bdrd={bdrd}
        onPress={onPress}
        >
            <ButtonText
                color={color}
                ftSz={ftSz}
                >
                {label}
            </ButtonText>
    </StyledButton>
    )
}

export const CancelButton = ({ bdrd, hgt, wdt, label, color, bg, mgtop, mgleft, ftSz, mgright, onPress }: ButtonProps ) => {
    return (
    
    <StyledButton 
        bg={bg}
        mgtop={mgtop}
        mgleft={mgleft}
        mgright={mgright}
        hgt={hgt}
        wdt={wdt}
        bdrd={bdrd}
        onPress={onPress}
        >
        <SubContainer align='center' justify='center' dir='row' bg='white' wdt='160' mgleft='0' bdrd='10'>
            <MaterialIcons name="cancel" size={22} color="#7f0000" />
                <ButtonText
                    mgleft='10'
                    color={color}
                    ftSz={ftSz}>
                    {label}
                </ButtonText>
        </SubContainer>    
    </StyledButton>
    )
}


export const DefineTimeButton = ({ modalidade, horario, bdrd, hgt, wdt, label, color, bg, mgtop, mgleft, ftSz, onPress }: ButtonProps ) => {
    return (
    <StyledButton 
        bg={bg}
        mgtop={mgtop}
        mgleft={mgleft}
        hgt={hgt}
        wdt={wdt}
        bdrd={bdrd}
        onPress={onPress}
        >
            <ButtonText
                color={color}
                ftSz={ftSz}
                >
                {modalidade}
            </ButtonText>

            <ButtonText
                color={color}
                ftSz={ftSz}
                >
                {horario}

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
        bg={bg}
        onPress={onPress}>
            <ButtonText
                color={color}>
                {label}
            </ButtonText>
    </StyledButton>
    )
}

export const ListOptionButton = ({ source, align, justify, bdrd, wdt, hgt, mgtop, mgleft, label, color, bg, ftSz, onPress }: ButtonProps ) => {
    return (
    <StyledButton 
        justify={justify}
        align={align}
        bdrd={bdrd}
        wdt={wdt}
        hgt={hgt}
        mgtop={mgtop}
        mgleft={mgleft}
        bg={bg}
        dir={'row'}
        onPress={onPress}
        >
            <PersonalIcon
                hgt='35'
                wdt='40'
                mgleft='10'
                mgtop='0'
                source={source}
                />

            <ButtonText
                ftSz={ftSz}
                color={color}
                mgleft='5'
                style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    maxWidth: '80%'
                }}
                >
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