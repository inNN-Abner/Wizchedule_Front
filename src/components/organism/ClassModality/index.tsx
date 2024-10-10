import React from 'react'
import { SubContainer, TimeInput, SubtitleText, Windows, StylezedButton } from '../../../components'
import DropdownComponent from '../../atoms/Picker'

export const DefineModality = () => {
  return (
    <Windows
          dir='row'
          mgtop='50'
          wdt='350'
          hgt='125'
          bg='darkGrayII'
        >

          <SubContainer mgtop='5' maxhgt='90' wdt='320' align='center' bg='darkGrayII'>
              <SubtitleText mgtop='5' pddleft='0' color='white' ftSz='18'>Tipo de aula</SubtitleText>

              <DropdownComponent />

          </SubContainer>
      </Windows>
    )
}
