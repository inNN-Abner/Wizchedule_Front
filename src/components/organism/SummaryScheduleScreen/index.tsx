import React from 'react'
import { Container, GenericText, HeaderPage, SubContainer, SummarySchedule  } from '../../components'

export const SummaryScheduleScreen = ({ navigation }) => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>      
    
    <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Minhas aulas</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Ver minha aula</GenericText>

      <SubContainer mgtop='20' align='center' mgleft='0'>
        <SummarySchedule navigation={navigation} />
      </SubContainer>
    </Container>
  )
}