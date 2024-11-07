import React from 'react';
import { Container, GenericText, HeaderPage, HomeGrid, StylezedButton, SubContainer  } from '../../components'

export const HomeScreen = ({ navigation }) => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>      
    
    <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Página principal</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Organização</GenericText>

      <SubContainer align='center' mgleft='0'>
        <HomeGrid navigation={undefined}></HomeGrid>
      </SubContainer>
      
    </Container>
  )
}
