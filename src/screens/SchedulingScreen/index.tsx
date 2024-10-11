import { GenericText, Container, HeaderPage, SubContainer, Calendar  } from '../../components'

export const SchedulingScreen = () => {
  return (
    <Container align='flex-start'>

      <HeaderPage />
        <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='25' mgleft='18'>Calendário</GenericText>
        <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Minhas aulas agendadas</GenericText>


      <SubContainer align='center' justify='center' hgt='400' mgleft='0'>

        <Calendar />

      </SubContainer>

    </Container>
  )
}