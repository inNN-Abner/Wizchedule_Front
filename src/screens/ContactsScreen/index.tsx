import { Keyboard, TouchableWithoutFeedback  } from 'react-native'
import { LoginText, Windows, Container, SubContainer, TextInput, Page  } from '../../components'

export const ContactsScreen = () => {
  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container align='flex-start' style={{ flex: 1 }}>

      <Page />
      <LoginText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Contatos</LoginText>
      <LoginText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Lista de professores</LoginText>

      <SubContainer align='center'>

        <Windows
        mgtop='70'
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
