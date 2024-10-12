import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback  } from 'react-native'
import { GenericText, Windows, Container, SubContainer, HeaderPage, ListOfContacts, SearchInput  } from '../../components'
import contacts from '../../../contacts'

export const ContactsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [list, setList] = useState(contacts)

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container align='flex-start' style={{ flex: 1 }}>

      <HeaderPage />
        <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Contatos</GenericText>
        <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Lista de professores</GenericText>

      <SubContainer align='center' maxhgt='85' mgleft='0'>
        
        <Windows
        mgtop='30'
        bg='darkGrayII'
        dir='column'
        >
          <Windows
          mgtop='0'
          wdt='100%'
          hgt='60'
          bdrdBL='0'
          bdrdBR='0'
          bg='white'
          dir='column'
          >
            <SearchInput
            mgtop='8'
            mgleft='10'
            bgColor='darkGrayII'
            placeholder='Pesquisar por nome'
            color='white'
            wdt='315'
            hgt='40'
            setList={setList}
            />
          </Windows>

          <ListOfContacts navigation={navigation} list={list} />

        </Windows>

      </SubContainer>

      </Container>
    </TouchableWithoutFeedback>
  )
}
