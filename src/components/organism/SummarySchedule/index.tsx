import React from 'react'
import { CancelButton, HeaderTexts, Logo, PersonalIcon, SubContainer, SubtitleText, Windows } from '../../atoms'
import idiomas from '../../../../arquivosTeste/agendamentos'
import Calendar from '../../../../assets/Calendar.png'
import Clock from '../../../../assets/Clock.png'
import Wizard from '../../../../assets/Icon_4.png'

export const SummarySchedule = ({ navigation }) => {
    return (
    <SubContainer align='center' justify='flex-start' maxhgt='10' mgleft='0'>

        <Windows 
          bg='white'
          hgt='60'
          bdrdBL='0'
          bdrdBR='0'
          mgtop='15'
          justify='flex-end'
        >
            <SubContainer dir='row' bg='white' bdrd='100' align='center'>
                {idiomas.map((item) => (
                    <React.Fragment key={item.idioma}>
                        <PersonalIcon
                            hgt='45'
                            wdt='45'
                            mgtop='0'
                            mgleft='15'
                            source={item.bandeira} 
                        />
                            
                        <HeaderTexts
                            mgtop='0'
                            mgleft='0'
                            ftSz='22'
                            color='darkBlue'
                            ftWgt='bold'
                        >{item.idioma}
                        </HeaderTexts>
                    </React.Fragment>
                ))}
            </SubContainer>

        </Windows>

        <Windows
            bg='darkGrayII'
            mgtop='0'
            hgt='300'
            bdrdTL='0'
            bdrdTR='0'
            dir='column'
            align='flex-start'
        >   
        
            <SubContainer mgleft='0' bg='darkGrayII' mgtop='20' dir='row' maxhgt='60' bdrd='0' align='center' justify='flex-start'>
                <Logo
                    source={Calendar}
                    wdt='40'
                    hgt='40'
                    mgTop='0'
                    mgleft='15'
                />

                <SubtitleText mgtop='0' mgleft='-70' color='white' ftWgt='normal' ftSz='20' >
                    12/11/2024
                </SubtitleText>
            </SubContainer>

            <SubContainer mgleft='0' mgtop='10' bg='darkGrayII' dir='row' maxhgt='60' bdrd='0' align='center' justify='flex-start'>
                <Logo
                    source={Clock}
                    wdt='40'
                    hgt='40'
                    mgTop='0'
                    mgleft='15'
                />

                <SubtitleText mgtop='0' mgleft='-70' color='white' ftWgt='normal' ftSz='20' >
                    16/09/2024 || Presencial
                </SubtitleText>

            </SubContainer>

            <SubContainer mgleft='0' mgtop='10' bg='darkGrayII' dir='row' maxhgt='60' bdrd='0' align='center' justify='flex-start'>
                <PersonalIcon
                    source={Wizard}
                    wdt='40'
                    hgt='40'
                    mgtop='0'
                    mgleft='15'
                />

                <SubtitleText mgtop='0' mgleft='-60' color='white' ftWgt='normal' ftSz='20' >
                    Gandalf
                </SubtitleText>
            </SubContainer>
            
            <SubContainer mgleft='0' mgtop='45' bg='darkGrayII' dir='row' maxhgt='60' bdrd='0' justify='flex-end'>
                <CancelButton
                    bg='white'
                    wdt='185'
                    mgtop='0'
                    mgright='15'
                    bdrd='10'
                    color='darkRed'
                    label={'Desmarcar aula'}
                    ftSz='18'
                    onPress={ () => navigation.navigate('Main')}
                />
            </SubContainer>
        </Windows>
        
    </SubContainer>
    )
}