import React from 'react'
import { Container, SelectDay, DayButton } from '../../atoms'

export const SelectDayRow = () => {
    return (
        <SelectDay bg='white' mgtop='50'>

            <DayButton color={'darkBlue'} label={'SEG'}></DayButton>
            <DayButton color={'darkBlue'} label={'TER'}></DayButton>
            <DayButton color={'darkBlue'} label={'QUA'}></DayButton>
            <DayButton color={'darkBlue'} label={'QUI'}></DayButton>
            <DayButton color={'darkBlue'} label={'SEX'}></DayButton>
            <DayButton color={'darkBlue'} label={'SAB'}></DayButton>
        
        </SelectDay>
    )
}