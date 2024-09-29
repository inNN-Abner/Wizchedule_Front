import React from 'react';
import { ButtonText, StyledButton } from './styles'

//Criando interface
interface ButtonProps {
    label: string
    onPress: () => void
    color?: string
    bg?: string
    mgtop?: string
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