import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ListOptionButton, SubContainer, SubtitleText } from '../../atoms'
import contacts from '../../../../arquivosTeste/contacts'

export const TeacherList = () => {

    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleButtonPress = (id: number) => {
        setSelectedId(id)
    }

    return (
        <SubContainer align='center' maxhgt='100' mgleft='5' bdrd='10' wdt='175' bg='darkGrayII'>
            
            <SubtitleText
                children={'Professores'}
                mgleft='0'
                mgtop='0'
                pddleft='0'
                ftSz='18'
            />

            <ScrollView>
                {contacts.map((item) => (

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
                        source={item.photo}
                        label={item.name}
                        ftSz='14'
                    />
                ))}
                
            </ScrollView>

        </SubContainer>
    )
}