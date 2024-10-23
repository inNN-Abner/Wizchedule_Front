import { GenericText, Container, HeaderPage, SubContainer, Calendar, SubtitleText, ListOptionButton, DefineTime  } from '../../components'
import { DefineTimeScheduling } from '../../components/organism/DefineTimeScheduling'
import { LanguageList } from '../../components/organism/LanguageList'
import { TeacherList } from '../../components/organism/TeacherSelectList'

export const SchedulingScreen = () => {
  return (
      <Container align='flex-start' maxhgt='100'>

        <HeaderPage />
          <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Calendário</GenericText>
          <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Minhas aulas agendadas</GenericText>

          <SubContainer maxhgt='28' justify='flex-start' mgleft='0'>

            <Calendar />

            <SubContainer maxhgt='100' align='justify-start' justify='center' mgleft='0' mgtop='110' dir='row'>
              <LanguageList />
              <TeacherList />
            </SubContainer>

          
          </SubContainer>

      </Container>
  )
}