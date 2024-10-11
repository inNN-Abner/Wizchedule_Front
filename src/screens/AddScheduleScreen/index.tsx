import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { GenericText, Container, HeaderPage, SelectDayRow, SubContainer, DefineTime, DefineModality, StylezedButton } from '../../components'

export const AddScheduleScreen = ({ route, navigation }) => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <Container align='flex-start'>

        <HeaderPage />
          <GenericText ftype='pageTitle' color='lightGray' ftSz='30' mgtop='30' mgleft='18'>Agenda</GenericText>
          <GenericText ftype='pageSubtitle' color='lightGray' ftSz='20' mgtop='5' mgleft='18'>Definir horário do professor</GenericText>
            
            
        <SubContainer align='center' mgleft='0'>

            <SelectDayRow />
            
            <DefineTime />
            
            <DefineModality />
          

            <SubContainer align='center' justify='flex-end' hgt='125'>
              
              <StylezedButton 
                wdt='350'
                hgt='50'
                bdrd='10'
                label={'Definir agenda'}
                onPress={() => {
                  navigation.navigate('Contatos')
                }} />
            
            </SubContainer>
        </SubContainer>

      </Container>

    </TouchableWithoutFeedback>
  )
}