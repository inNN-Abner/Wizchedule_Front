import { GenericText, Container, HeaderPage, IdentificationCard, Windows, SubContainer, HeaderTexts, PerfilGrid  } from '../../components'

export const ContactsDetailScreen = ({ route, navigation }) => {

  return (
    <Container align='flex-start'>

    <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Contatos</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Informações do professor</GenericText>

      <SubContainer align='center' mgleft='0' maxhgt='85'>
        
        <Windows 
        bg='darkGrayII'
        align='center'
        justify='flex-start'
        dir='column'
        >
          <IdentificationCard route={route} />

          <HeaderTexts
          mgtop='5'
          mgleft='12'
          color='lightGray'
          ftSz='16'
          wdt='100%'
          >Horários do professor</HeaderTexts>

        <PerfilGrid navigation={navigation} />

        </Windows>

      </SubContainer>

    </Container>
  )
}