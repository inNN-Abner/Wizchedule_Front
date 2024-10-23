import React, { useState } from 'react'
import { ListOptionButton, StylezedButton, SubContainer, SubtitleText } from '../../atoms'
import horarios from '../../../../arquivosTeste/horarios'

export const DefineTimeScheduling = () => {

    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleButtonPress = (id: number) => {
        setSelectedId(id)
    }

    return (
        <SubContainer dir='column'
         align='center' maxhgt='100' mgleft='5' bdrd='10' wdt='160' bg='darkGrayII'>
            
            <SubtitleText
                children={'Professores'}
                mgleft='0'
                mgtop='0'
                pddleft='0'
                ftSz='18'
            />
        <SubContainer dir='row'
         align='center' maxhgt='100' mgleft='5' bdrd='10' wdt='160' bg='darkGrayII'>

                {horarios.map((item) => (

                    <StylezedButton
                        key={item.id}
                        onPress={() => handleButtonPress(item.id)}
                        justify='center'
                        wdt='100'
                        hgt='50'
                        bdrd='5'
                        mgleft='0'
                        mgtop='5'
                        color={selectedId === item.id ? 'darkGrayII' : 'white'}
                        bg={'white'}
                        ftSz='12'
                    />
                ))}
                        </SubContainer>

        </SubContainer>
    )
}