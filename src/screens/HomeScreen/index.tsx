import React from 'react';
import { Container, HeaderPage, SubContainer  } from '../../components'
import { CalendarSkeleton } from '../../components/molecules';

export const HomeScreen = () => {
  return (
    <Container> 
      <HeaderPage />

      <SubContainer align='center' justify='center' bg='darkRed' mgleft='0' mgtop='0'>
        <CalendarSkeleton />
      </SubContainer> 

    </Container>
  )
}
