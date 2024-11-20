import React from 'react';
import { ClassGrid, Container, GenericText, HeaderPage, HomeGrid, StylezedButton, SubContainer  } from '../../components'

export const HomeScreen = ({ navigation }) => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>      
    
    <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Datas e lembretes</GenericText>

      <SubContainer align='center' mgleft='0'>
        <ClassGrid/>

        <StylezedButton
          bg='darkBlue'
          color='red'
          ftSz='20'
          wdt='180'
          hgt='35'
          mgleft='-160'
          mgtop='0'
          label={'+ Agendar aula'}
          onPress={() => {
            navigation.navigate('AddSchedule')
          }}
        ></StylezedButton>


        <HomeGrid/>
      </SubContainer>
      
    </Container>
  )
}
