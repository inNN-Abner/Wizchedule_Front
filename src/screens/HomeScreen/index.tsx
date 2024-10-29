import React from 'react';
import { Container, GenericText, HeaderPage, SubContainer  } from '../../components'
import { CalendarSkeleton } from '../../components/molecules';

export const HomeScreen = () => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>      
    
    <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Minhas aulas</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Aulas agendadas</GenericText>

      <SubContainer align='center' justify='center' mgleft='0' mgtop='0' hgt='380'>
        <CalendarSkeleton />
      </SubContainer> 

    </Container>
  )
}
