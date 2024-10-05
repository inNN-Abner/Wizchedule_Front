import { GenericText, Windows, Container, HeaderPage  } from '../../components'

export const SchedulingScreen = () => {
  return (
    <Container align='flex-start'>
      <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='25' mgleft='18'>Contatos</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Lista de professores</GenericText>
      <Windows
      mgtop='100'
      
      >


      </Windows>
    </Container>
  )
}
