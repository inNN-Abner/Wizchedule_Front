import { Keyboard, TouchableWithoutFeedback  } from 'react-native'
import { GenericText, Windows, Container, SubContainer, TextInput, HeaderPage, ContactPhoto, ContactInfo, ContactName  } from '../../components'
import Wizard from '../../../assets/Icon_2.png'
import { ItemPhoto } from '../../components/atoms/Photo/styles'

export const ContactsDetailScreen = () => {
  return (
    
      <Container align='flex-start' style={{ flex: 1 }}>

      <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Contatos</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Informações do professor</GenericText>

        <Container align='center'>

          <Windows
            mgtop='15'
            hgt='150'
            align='center'
            >
              <ItemPhoto
                source={Wizard}
                hgt='125'
                wdt='80'
                bdrd='20'
                />
            
              <SubContainer mgleft='5' hgt='120' wdt='240' align='left' justify='center' bg='white'>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold'>Nome do professor(a)</ContactInfo>
                <ContactName color='darkGrayII' children={'Albus Dumbledore'} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>Matrícula</ContactInfo>
                <ContactName color='darkGrayII' children={'A010DO1'} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>E-mail</ContactInfo>
                <ContactName color='darkGrayII' children={'albus.dumbledore@email.com'} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>Conta</ContactInfo>
                <ContactName color='darkGrayII' children={'Wizard - Professor'} ftWgt='normal' mgtop='-3' ></ContactName>

              </SubContainer>


          </Windows>

        </Container>

      </Container>
  )
}
