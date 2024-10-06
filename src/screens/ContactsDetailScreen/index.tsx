import { GenericText, Container, HeaderPage,  IdentificationCard  } from '../../components'

export const ContactsDetailScreen = () => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>

      <HeaderPage />
      <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Contatos</GenericText>
      <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Informações do professor</GenericText>

      <IdentificationCard navigation={undefined}></IdentificationCard>

    </Container>
  )
}
