import { GenericText, Container, HeaderPage, SubContainer, Calendar, SubtitleText, ListOptionButton  } from '../../components'
import Brasil from '../../../assets/Country_BR.png'
import EUA from '../../../assets/Country_EN.png'
import Espanha from '../../../assets/Country_ES.png'
import Japão from '../../../assets/Country_JP.png'
import Itália from '../../../assets/Country_IT.png'

export const SchedulingScreen = () => {
  return (
      <Container align='flex-start'>

        <HeaderPage />
          <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Calendário</GenericText>
          <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Minhas aulas agendadas</GenericText>

          <SubContainer justify='flex-start' mgleft='0' >        

            <Calendar />

            <SubContainer align='justify-start' justify='flex-start' mgleft='0' mgtop='60'>

              <SubtitleText
                children={'Idioma'}
                mgleft='53'
                mgtop='0'
                pddleft='0'
              ></SubtitleText>

              <ListOptionButton
                justify='flex-start'
                wdt='150'
                hgt='50'
                bdrd='5'
                mgleft='20'
                mgtop='5'
                bg='white'
                source={Brasil}
                label='Português'
                color='darkBlue'
                ftSz='16'
              ></ListOptionButton>

              <ListOptionButton
                justify='flex-start'
                wdt='150'
                hgt='50'
                bdrd='5'
                mgleft='20'
                mgtop='5'
                bg='white'
                source={Espanha}
                label='Espanhol'
                color='darkBlue'
                ftSz='16'
              ></ListOptionButton>

              <ListOptionButton
                justify='flex-start'
                wdt='150'
                hgt='50'
                bdrd='5'
                mgleft='20'
                mgtop='5'
                bg='white'
                source={EUA}
                label='Inglês'
                color='darkBlue'
                ftSz='16'
              ></ListOptionButton>

              <ListOptionButton
                justify='flex-start'
                wdt='150'
                hgt='50'
                bdrd='5'
                mgleft='20'
                mgtop='5'
                bg='white'
                source={Itália}
                label='Italiano'
                color='darkBlue'
                ftSz='16'
              ></ListOptionButton>

              <ListOptionButton
                justify='flex-start'
                wdt='150'
                hgt='50'
                bdrd='5'
                mgleft='20'
                mgtop='5'
                bg='white'
                source={Japão}
                label='Japonês'
                color='darkBlue'
                ftSz='16'
              ></ListOptionButton>

            </SubContainer>

          </SubContainer>

      </Container>
  )
}