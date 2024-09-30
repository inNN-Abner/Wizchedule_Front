import { Keyboard, TouchableWithoutFeedback } from 'react-native'
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
            <TextInput></TextInput>
        </Windows>

      </SubContainer>
    </Container>
    </TouchableWithoutFeedback>
  )
}
