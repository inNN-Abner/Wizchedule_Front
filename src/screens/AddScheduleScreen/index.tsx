import { GenericText, Container, HeaderPage } from '../../components'

export const AddScheduleScreen = ({ route }) => {

  const { id, name, info, photo, registration, account } = route.params

  return (
    <Container align='flex-start'>

    <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Disponibilidade</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Definir horário do professor</GenericText>
    </Container>
  )
}