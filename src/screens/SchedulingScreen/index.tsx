import { LoginText, Windows, Container, Page  } from '../../components'

export const SchedulingScreen = () => {
  return (
    <Container align='flex-start'>
      <Page />
      <LoginText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='25' mgleft='18'>Contatos</LoginText>
      <LoginText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Lista de professores</LoginText>
      <Windows
      mgtop='100'
      
      >


      </Windows>
    </Container>
  )
}
