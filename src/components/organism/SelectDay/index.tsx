import React, { useState } from 'react'
import { SelectDay, DayButton } from '../../atoms'

export const SelectDayRow = () => {

    const [indexDate, setIndexDate] = useState<number | null>(null)

    const handleButtonPress = (index: number) => {
        setIndexDate(index)
    }

    return (

        <SelectDay bg='white' mgtop='-10' bdrdTL='0' bdrdTR='0'>
            {['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'].map((day, index) => (
                <DayButton 
                    key={index}
                    label={day}
                    color={indexDate === index ? 'white' : 'darkBlue'}
                    bg={indexDate === index ? 'darkRed' : 'white'}
                    onPress={() => handleButtonPress(index)}
                />
            ))}
        </SelectDay>
    )
}