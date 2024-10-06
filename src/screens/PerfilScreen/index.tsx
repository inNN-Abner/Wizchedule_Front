import React from 'react'
import { HeaderPage , Container, IdentificationCard, GenericText, SubContainer  } from '../../components'

export const PerfilScreen = () => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>

      <HeaderPage />
      
        <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Meu Perfil</GenericText>
        <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Trocar o modelo do Header</GenericText>

        <SubContainer align='center' mgleft='0'>
          <IdentificationCard />
        </SubContainer>
    </Container>
  )
}
