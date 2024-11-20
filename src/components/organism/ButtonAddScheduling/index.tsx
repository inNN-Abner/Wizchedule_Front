import React, { useState } from 'react'
import { DefineTimeButton, GenericText, HeaderTexts, StylezedButton, SubContainer, SubtitleText } from '../../atoms'
import horarios from '../../../../arquivosTeste/horarios'
import { CreateModal } from '../../molecules'

export const DefineTimeScheduling: React.FC<{ navigation: any }>  = ({ navigation }) => {

    const [openModal, setOpenModal] = useState(false)
    const [selectedId, setSelectedId] = useState<number | null>(null)

    function handleOnPress () {
        setOpenModal(!openModal)
      }    

    const handleButtonPress = (id: number) => {
        setSelectedId(id)
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
            
        <SubContainer dir='row' align='center' justify='center' wrap='wrap'
        maxhgt='60' mgleft='0' bdrd='10' bg='darkGrayII'>

                {horarios.map((item, index) => (

                    <DefineTimeButton
                        key={item.id}
                        onPress={() => handleButtonPress(item.id)}
                        justify='center'
                        align='center'
                        wdt='120'
                        hgt='50'
                        bdrd='10'
                        mgleft={index % 3 !== 0 ? '6' : '0'}
                        mgtop={index >= 2 ? '5' : '5'}
                        color={'white'}
                        bg={selectedId === item.id ? 'darkRed' : 'gray'}
                        modalidade={item.modalidade}
                        horario={item.horario}
                        ftSz='14'
                    />
                ))}
        </SubContainer>
            
        <SubContainer dir='row' justify='center' mgleft='0' mgtop='15' bdrd='0'>
            <StylezedButton
                bg='white'
                mgtop='0'
                bdrd='10'
                color='darkRed'
                label={'Cancelar'}
                onPress={() => {
                    navigation.navigate('Principal')
                }}
            />

            <StylezedButton
                bg='white'
                mgtop='0'
                bdrd='10'
                mgleft='20'
                color='darkBlue'
                label={'Agendar'}
                onPress={handleOnPress}
            />
            
                <CreateModal
                    visible={openModal}
                    bg='white'
                    bdrd='10' 
                    wdt='300'
                    hgt='200'
                    pdd='0'
                    align='center'
                    justify='center'
                >   
                    <GenericText ftype='bold' color='darkBlue' mgtop='0' mgleft='0' ftSz='16'>
                        Confirmar agendamento</GenericText>

                    <GenericText ftype='regular' color='darkBlue' mgtop='5' ftSz='14' mgleft=''>
                        Ao clicar em "Agendar" sua aula será agendada.
                        Caso não vá comparecer, será necessário desmarcar o agendamento com antecedência!</GenericText>

                        <StylezedButton 
                        label={'Agendar'}
                        bg='darkRed'
                        mgtop='10'
                        wdt='150'
                        hgt='40'
                        bdrd='10'
                        ftSz='18'
                        onPress={() => {
                            handleOnPress(),
                            navigation.navigate('Principal')
                        }}
                        />

                        <StylezedButton 
                        label={'Cancelar'}
                        bg='white'
                        color='darkRed'
                        mgtop='10'
                        wdt='150'
                        hgt='40'
                        bdrd='10'
                        ftSz='18'
                        onPress={() => {
                            handleOnPress(),
                            navigation.navigate('Principal')
                        }}
                        />
                </CreateModal>
            </SubContainer>
        </SubContainer>
    )
}