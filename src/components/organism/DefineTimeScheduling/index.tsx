import React, { useState } from 'react'
import { DefineTimeButton, SubContainer, SubtitleText } from '../../atoms'
import horarios from '../../../../arquivosTeste/horarios'

export const DefineTimeScheduling: React.FC<{ onTimeSelected: (time: string) => void }> = ({ onTimeSelected }) => {

    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleButtonPress = (id: number, time: string) => {
        setSelectedId(id)
        onTimeSelected(time)
    }

    return (
        <SubContainer dir='column' align='center' mgleft='0' maxhgt='100' mgtop='10'>
            <SubtitleText
                children={'Horários disponíveis'}
                mgleft='0'
                mgtop='0'
                pddleft='0'
                ftSz='18'
            />
            <SubContainer dir='row' align='center' justify='center' wrap='wrap' maxhgt='60' mgleft='0' bdrd='10' bg='darkGrayII'>
                {horarios.map((item, index) => (
                    <DefineTimeButton
                        key={item.id}
                        onPress={() => handleButtonPress(item.id, item.horario)}
                        justify='center'
                        align='center'
                        wdt='120'
                        hgt='50'
                        bdrd='10'
                        mgleft={index % 3 !== 0 ? '6' : '0'}
                        mgtop={index >= 3 ? '0' : '18'}
                        color={'white'}
                        bg={selectedId === item.id ? 'darkRed' : 'gray'}
                        modalidade={item.modalidade}
                        horario={item.horario}
                        ftSz='14'
                    />
                ))}
            </SubContainer>
        </SubContainer>
    )
}