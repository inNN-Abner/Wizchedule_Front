import { useState } from 'react'
import { GenericText, Container, HeaderPage, SubContainer, Calendar, StylezedButton } from '../../components'
import { CreateModal } from '../../components/molecules'
import { DefineTimeScheduling } from '../../components/organism/DefineTimeScheduling'
import { LanguageList } from '../../components/organism/LanguageList'
import { TeacherList } from '../../components/organism/TeacherSelectList'

export const SchedulingScreen = ({ navigation }) => {

  const [openModal, setOpenModal] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [selectedTeacher, setSelectedTeacher] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [confirming, setConfirming] = useState(false)
  const [titleMessage, setTitleMessage] = useState('');
  const [bodyMessage, setBodyMessage] = useState('');

  function handleOnPress () {
    setOpenModal(!openModal)
  }    
  
  const modalConfirm = () => {
    setTitleMessage ('Confirmar agendamento')
    setBodyMessage('Clique em "Confirmar" para agendar sua aula.\n Caso não vá comparecer, será necessário desmarcar o agendamento com antecedência!')
    handleOnPress()
  }

  const modalCancel = () => {
    setTitleMessage ('Cancelar agendamento')
    setBodyMessage('Tem certeza que deseja\ncancelar o agendamento?')
    handleOnPress()
  }

  const handleConfirm = () => {
    setSelectedDate(null)
    setSelectedLanguage(null)
    setSelectedTeacher(null)
    setSelectedTime(null)
    navigation.navigate('Contacts')
  }

  return (
    <Container align='flex-start' maxhgt='100'>

      <HeaderPage />
        <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Calendário</GenericText>
        <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Minhas aulas agendadas</GenericText>

        <SubContainer maxhgt='28' justify='flex-start' mgleft='0'>

          {step >= 1 && (
              <Calendar onDateSelected={(date) => {setSelectedDate(date); setStep(2) }}  />
          )}
            <SubContainer maxhgt='100' align='justify-start' justify='center' mgleft='0' mgtop='90' dir='row'>
            {step >= 2 && (
                <LanguageList onLanguageSelected={(language) => { setSelectedLanguage(language); setStep(3) }} />
            )}

            {step >= 3 && (
                <TeacherList onTeacherSelected={(teacher) => { setSelectedTeacher(teacher); setStep(4) }} />
            )}
              </SubContainer>

              <SubContainer maxhgt='100' align='justify-start' justify='center' mgleft='0' dir='row'>
              {step >= 4 && (
                <DefineTimeScheduling onTimeSelected={(time) => { setSelectedTime(time); setStep(5) }} />
              )}
            </SubContainer>


            {step >= 5 && (
            <SubContainer dir='row' justify='center' mgleft='0' mgtop='-30' bdrd='0'>
              <StylezedButton
                bg='white'
                mgtop='0'
                bdrd='10'
                color='darkRed'
                label={'Cancelar'}
                onPress={() => modalCancel()}
              />

              <StylezedButton
                  bg='white'
                  mgtop='0'
                  bdrd='10'
                  mgleft='20'
                  color='darkBlue'
                  label={'Agendar'}
                  onPress={() => modalConfirm()}
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
                  <GenericText ftype='bold' color='darkBlue' mgtop='-15'  mgleft='0' ftSz='16'>
                    {titleMessage}</GenericText>

                  <GenericText ftype='regular' color='darkBlue' mgtop='10' ftSz='14' mgleft='0'>
                    {bodyMessage}</GenericText>

                    <SubContainer dir='row-reverse' mgleft='0' justify='center' align='center' maxhgt='0' mgtop='25'>
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
                          handleOnPress()
                      }}
                      />
                    </SubContainer>
              </CreateModal>
            </SubContainer>
          )}
        </SubContainer>

    </Container>
)
}