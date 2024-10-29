import { Calendar } from 'react-native-calendars'
import horarios from '../../../../arquivosTeste/horarios'

interface CalendarEvent {
  id: number
  data: string
}

const calendarEvents: CalendarEvent[] = horarios.map(item => ({
    id: item.id,
    data: item.data
}))
  

const getMarkedDates = () => {
  return horarios.reduce((acc: Record<string, any>, item) => {
    acc[item.data] = {
      customStyles: {
        container: { backgroundColor: '#7f0000', elevation: 2 },
        text: { color: 'white' },
      },
    };
    return acc
  }, {})
}

export const CalendarSkeleton = () => {
  
  const markedDates = getMarkedDates()

  return (
    <Calendar
      markingType={'custom'}
      markedDates={markedDates}
      onDayPress={(day) => {
        console.log('selected day', day)
      }}
    />
  )
}