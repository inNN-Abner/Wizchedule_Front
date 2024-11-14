import React, { useState } from 'react'
import { CancelButton, GenericText, HeaderTexts, Logo, PersonalIcon, StylezedButton, SubContainer, SubtitleText, Windows } from '../../atoms'
import idiomas from '../../../../arquivosTeste/agendamentos'
import Calendar from '../../../../assets/Calendar.png'
import Clock from '../../../../assets/Clock.png'
import { CreateModal } from '../../molecules'
import { ScrollView } from 'react-native-gesture-handler'

export const SummarySchedule = ({ navigation }) => {
    const [openModal, setOpenModal] = useState(false)
    const [titleMessage, setTitleMessage] = useState('');
    const [bodyMessage, setBodyMessage] = useState('');

    function handleOnPress() {
        setOpenModal(!openModal)
    }

    const modalCancel = () => {
        setTitleMessage('Cancelar agendamento')
        setBodyMessage('Tem certeza que deseja cancelar o\nagendamento? Essa ação é irreversível')
        handleOnPress()
    }

    return (
        <SubContainer align='center' justify='center' mgleft='40' maxhgt='75'  >
        <ScrollView>

            {idiomas.map((item) => (
                <React.Fragment key={item.id}>
        <Windows 
          bg='white'
          hgt='45'
          bdrdBL='0'
          bdrdBR='0'
          mgtop='10'
          justify='flex-end'
        >
            <SubContainer dir='row' bg='white' bdrd='100' align='center'>
                <PersonalIcon
                    hgt='40'
                    wdt='40'
                    mgtop='0'
                    mgleft='15'
                    source={item.bandeira} 
                />
                <HeaderTexts
                    mgtop='0'
                    mgleft='0'
                    ftSz='20'
                    color='darkBlue'
                    ftWgt='bold'
                >{item.idioma}
                </HeaderTexts>
                </SubContainer>
            </Windows>

            <Windows
                bg='darkGrayII'
                mgtop='0'
                hgt='200'
                bdrdTL='0'
                bdrdTR='0'
                dir='column'
                align='flex-start'
            >   
        <SubContainer mgleft='0' mgtop='15' bg='darkGrayII' dir='row' maxhgt='16' bdrd='0' align='center' justify='flex-start'>
            <Logo
                source={Calendar}
                wdt='35'
                hgt='35'
                mgTop='0'
                mgleft='15'
            />
                <SubtitleText mgtop='0' mgleft='-70' color='white' ftWgt='normal' ftSz='16'>
                    {item.data}
                </SubtitleText>
                </SubContainer>


                <SubContainer mgleft='0' mgtop='10' bg='darkGrayII' dir='row' maxhgt='16' bdrd='0' align='center' justify='flex-start'>
        <Logo
            source={Clock}
            wdt='35'
            hgt='35'
            mgTop='0'
            mgleft='15'
        />

        <SubtitleText mgtop='0' mgleft='-70' color='white' ftWgt='normal' ftSz='16' >
            16/09/2024 || Presencial
        </SubtitleText>

    </SubContainer>

    <SubContainer mgleft='0' mgtop='10' bg='darkGrayII' dir='row' maxhgt='16' bdrd='0' align='center' justify='flex-start'>
        <PersonalIcon
            source={item.photo}
            wdt='35'
            hgt='35'
            mgtop='0'
            mgleft='15'
        />
        <SubtitleText mgtop='0' mgleft='-60' color='white' ftWgt='normal' ftSz='18' >
            {item.pessoa}
        </SubtitleText>
                </SubContainer>

                <SubContainer mgleft='0' mgtop='5' bg='darkGrayII' dir='row' maxhgt='14' bdrd='0' justify='flex-end'>
                    <CancelButton
                        bg='white'
                        wdt='185'
                        hgt='40'
                        mgtop='0'
                        mgright='15'
                        bdrd='10'
                        color='darkRed'
                        label={'Desmarcar aula'}
                        ftSz='17'
                        onPress={modalCancel}
                    />
                </SubContainer>
            </Windows>
        </React.Fragment>
    ))}

    <CreateModal visible={openModal} bg='white' bdrd='10' wdt='300' hgt='150' pdd='0' align='center'>

        <GenericText ftype='bold' color='darkBlue' mgtop='-15' mgleft='0' ftSz='16'>{titleMessage}</GenericText>
        <GenericText ftype='regular' color='darkBlue' mgtop='10' ftSz='14' mgleft='0'>{bodyMessage}</GenericText>
        
        <SubContainer dir='row-reverse' mgleft='0' justify='center' align='center' maxhgt='0' mgtop='25'>
            <StylezedButton
                label={'Cancelar aula'}
                bg='darkRed'
                mgtop='15'
                wdt='150'
                hgt='40'
                bdrd='10'
                ftSz='16'
                onPress={() => {
                    handleOnPress();
                    navigation.navigate('Main');
                }}
            />
            <StylezedButton
                label={'Manter aula'}
                bg='white'
                color='darkRed'
                mgtop='15'
                wdt='150'
                hgt='40'
                bdrd='10'
                ftSz='16'
                onPress={handleOnPress}
            />
        </SubContainer>
    </CreateModal>
    </ScrollView>

</SubContainer>
)
}