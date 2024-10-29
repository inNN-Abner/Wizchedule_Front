import React from 'react';
import { Container, GenericText, HeaderPage, StylezedButton, SubContainer  } from '../../components'
import { CalendarSkeleton } from '../../components/molecules';

export const ReportSchedulingScreen = ({ navigation }) => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>      
    
    <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Minhas aulas</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Aulas agendadas</GenericText>

      <SubContainer align='center' justify='center' mgleft='0' mgtop='15' hgt='380'>
        <CalendarSkeleton />

        <StylezedButton
          bg='darkBlue'
          color='red'
          ftSz='20'
          wdt='180'
          mgleft='-130'
          mgtop='0'
          label={'+ Agendar aula'}
          onPress={() => {
            navigation.navigate('AddSchedule')
          }}
        ></StylezedButton>

      </SubContainer> 

    </Container>
  )
}
