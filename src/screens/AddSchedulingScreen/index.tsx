import { useState } from 'react'
import { GenericText, Container, HeaderPage, SubContainer, Calendar, StylezedButton, selectedDate } from '../../components'
import { CreateModal } from '../../components/molecules'
import { DefineTimeScheduling } from '../../components/organism/DefineTimeScheduling'
import { LanguageList } from '../../components/organism/LanguageList'
import { TeacherList } from '../../components/organism/TeacherSelectList'

export const SchedulingScreen = ({ navigation }) => {

  const [openModal, setOpenModal] = useState(false)

  function handleOnPress () {
    setOpenModal(!openModal)
  }    

  function handleScheduling (){
    const formattedDate = selectedDate.toString().slice(0, 10) //pegar data formatada para adicionar no agendamento
    // adicionar restante das informacoes para realizar a requisicao de cadastro do agendamento
  }

  return (
      <Container align='flex-start' maxhgt='100'>

        <HeaderPage />
          <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Calendário</GenericText>
          <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Minhas aulas agendadas</GenericText>

          <SubContainer maxhgt='28' justify='flex-start' mgleft='0'>

            <Calendar />

            <SubContainer maxhgt='100' align='justify-start' justify='center' mgleft='0' mgtop='90' dir='row'>
              <LanguageList />
              <TeacherList />
            </SubContainer>

            <SubContainer maxhgt='100' align='justify-start' justify='center' mgleft='0' dir='row'>
              <DefineTimeScheduling navigation={navigation} />
            </SubContainer>

              <SubContainer dir='row' justify='center' mgleft='0' mgtop='-30' bdrd='0'>
              <StylezedButton
                bg='white'
                mgtop='0'
                bdrd='10'
                color='darkRed'
                label={'Cancelar'}
                onPress={() => {
                    navigation.navigate('Appointments')
                }}
            />

            <StylezedButton
                bg='white'
                mgtop='0'
                bdrd='10'
                mgleft='20'
                color='darkBlue'
                label={'Agendar'}
                onPress={handleOnPress}
            />
            
                <CreateModal
                    visible={openModal}
                    bg='white'
                    bdrd='10' 
                    wdt='300'
                    hgt='150'
                    pdd='0'
                    align='center'
                >   
                    <GenericText ftype='bold' color='darkBlue' mgtop='-10'  mgleft='0' ftSz='16'>
                        Confirmar agendamento</GenericText>

                    <GenericText ftype='regular' color='darkBlue' mgtop='5' ftSz='14'>
                        Ao clicar em "Agendar" sua aula será agendada.
                        Caso não vá comparecer, será necessário desmarcar o agendamento com antecedência!</GenericText>

                      <SubContainer dir='row-reverse' mgleft='0' justify='center' align='center' maxhgt='0' mgtop='20'>
                        <StylezedButton 
                        label={'Agendar'}
                        bg='darkRed'
                        mgtop='10'
                        wdt='150'
                        hgt='40'
                        bdrd='10'
                        ftSz='18'
                        onPress={() => {
                            handleOnPress(),
                            navigation.navigate('Appointments')
                        }}
                        />

                        <StylezedButton 
                        label={'Cancelar'}
                        bg='white'
                        color='darkRed'
                        mgtop='10'
                        wdt='150'
                        hgt='40'
                        bdrd='10'
                        ftSz='18'
                        onPress={() => {
                            handleOnPress(),
                            navigation.navigate('Appointments')
                        }}
                        />
                      </SubContainer>
                </CreateModal>
            </SubContainer>
          </SubContainer>

      </Container>
  )
}