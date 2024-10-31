import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ListOptionButton, SubContainer, SubtitleText } from '../../atoms'
import idiomas from '../../../../arquivosTeste/idiomas'

export const LanguageList = ({ onLanguageSelected }) => {

    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleButtonPress = (id: number) => {
        setSelectedId(id)
        onLanguageSelected()
    }

    return (
        <SubContainer align='center' maxhgt='100' mgleft='5' bdrd='10' bg='darkGrayII' wdt='175'>
            
            <SubtitleText
                children={'Idiomas'}
                mgleft='0'
                mgtop='0'
                pddleft='0'
                ftSz='18'
            />

            <ScrollView>
                {idiomas.map((item) => (

                    <ListOptionButton
                        key={item.id}
                        onPress={() => handleButtonPress(item.id)}
                        justify='flex-start'
                        wdt='165'
                        hgt='50'
                        bdrd='5'
                        mgleft='0'
                        mgtop='5'
                        color={selectedId === item.id ? 'white' : 'darkBlue'}
                        bg={selectedId === item.id ? 'darkRed' : 'white'}
                        source={item.bandeira}
                        label={item.idioma}
                        ftSz='16'
                    />
                ))}
                
            </ScrollView>

        </SubContainer>
    )
}