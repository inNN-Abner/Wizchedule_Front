import { Keyboard, TouchableWithoutFeedback  } from 'react-native'
import { GenericText, Windows, Container, SubContainer, TextInput, HeaderPage  } from '../../components'

export const ContactsDetail = () => {
  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container align='flex-start' style={{ flex: 1 }}>

      <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>TESTE</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Testando</GenericText>

      <SubContainer align='center'>

        <Windows
        mgtop='30'
        bg='darkGrayII'
        >
          <Windows
          mgtop='0'
          wdt='100%'
          hgt='60'
          bdrdBL='0'
          bdrdBR='0'
          >
            <TextInput
            mgtop='8'
            mgleft='10'
            bgColor='darkGrayII'
            placeholder='Pesquisar por nome'
            color='white'
            wdt='315'
            hgt='40'
            />
          </Windows>
        </Windows>
      </SubContainer>

      </Container>
    </TouchableWithoutFeedback>
  )
}
