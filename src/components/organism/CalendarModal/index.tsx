import { useState } from 'react'
import { CreateModal } from '../../../components/molecules'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'
import { ContactInfoText } from '../../atoms/Text/styles'
import { SubContainer, StylezedButton, Windows  } from '../../../components'

export const Calendar = ({ onDateSelected }) => {
  
  const today = new Date()
  
  today.setDate(today.getDate() + 1);
  const startDate = getFormatedDate(today, 'YYYY/MM/DD')

  const [openModal, setOpenModal] = useState(false)
  const [date, setDate] = useState('Selecione uma data')
  const [year, setYear] = useState(today.getFullYear())

  function handleOnPress () {
    setOpenModal(!openModal)
  }
 
  function handleChange (propDate: string) {
    const [year, month, day] = propDate.split('/').map(Number)
    const selectedDate = new Date(year, month - 1, day)

    const formattedDate = formatDate(selectedDate)
    setDate(formattedDate)
    setYear(selectedDate.getFullYear())
  }

  function formatDate(date: Date) {
    const day = date.getDate()
    const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)
    const weekday = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date)

    return `${day}, ${month.charAt(0).toUpperCase() + month.slice(1)} - ${weekday.charAt(0).toUpperCase() + weekday.slice(1)}`
  }

  return (
    <SubContainer align='center' justify='flex-start' maxhgt='10' mgleft='0'>

      <Windows 
          bg='darkRed'
          hgt='40'
          bdrdBL='0'
          bdrdBR='0'
          mgtop='15'
          justify='flex-end'
        >
          <ContactInfoText
            color='white'
            mgright='20'
            mgtop='5'
            ftSz='18'
          >{year}</ContactInfoText>
        </Windows>
      
          <Windows 
              align='center'
              justify='center'
              hgt='50'    
              mgtop='-5'
              bdrdTL='0'
              bdrdTR='0'    
              >
              
          <StylezedButton
                
              label={date}
              bg='transparent'
              color='darkBlue'
              wdt='330'
              mgtop='0'
              onPress={handleOnPress}
              />
            
              <CreateModal
              visible={openModal} 
              bg='white' 
              bdrd='50'
              >
                  <DatePicker
                  mode='calendar'
                  selected={date}
                  minimumDate={startDate}
                  onDateChange={(propDate) => {
                    handleChange(propDate)
                    onDateSelected()
                  }}
                  />
                  
                  <StylezedButton 
                  label={'Selecionar'}
                  bg='darkRed'
                  mgtop='-10'
                  onPress={handleOnPress}
                  />

              </CreateModal>
          </Windows>

    </SubContainer>
  )
}