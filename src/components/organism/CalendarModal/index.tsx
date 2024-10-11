import { useState } from 'react'
import { SubContainer, StylezedButton, Windows  } from '../../../components'
import { CreateModal } from '../../../components/molecules'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'

export const Calendar = () => {
  
  const today = new Date()

  today.setDate(today.getDate() + 1);
  const startDate = getFormatedDate(today, 'YYYY/MM/DD')

  const [openModal, setOpenModal] = useState(false)
  const [date, setDate] = useState('Selecione uma data')

  function handleOnPress () {
    setOpenModal(!openModal)
  }
  
  function handleChange (propDate: string) {
    setDate(propDate)
  }

  return (
    <SubContainer align='center' justify='flex-start' hgt='400' mgleft='0'>

    <Windows 
        bg='darkRed'
        hgt='40'
        bdrdBL='0'
        bdrdBR='0'
        mgtop='25'
    ></Windows>
    
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
                onDateChange={handleChange}
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