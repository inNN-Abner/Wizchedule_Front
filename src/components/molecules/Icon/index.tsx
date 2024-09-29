import React from 'react'
import { PersonalIcon } from '../../atoms/PersonalIcon'
import { SubtitleText } from '../../atoms/Text'
import Wizard from '../../../../assets/Icon_1.png'
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