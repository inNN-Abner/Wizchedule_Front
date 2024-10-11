import React from 'react'
import Wizard from '../../../../assets/Icon_1.png'
import { PersonalIcon } from '../../atoms/PersonalIcon'
import { ButtonContainer } from './styles'

export const IconButton = ({ }) => {
    return (
        <ButtonContainer>
            <PersonalIcon 
                source={Wizard}>
                    
                </PersonalIcon>
        </ButtonContainer>
    )
}