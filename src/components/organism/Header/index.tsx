import React from 'react'
import { Logo } from '../../atoms/Logo'
import Wizard from '../../../../assets/Icon_1.png'
import WhiteWizard from '../../../../assets/Logo_Wizchedule_branco.png'
import { PersonalIcon } from '../../atoms/PersonalIcon'
import { WhiteHeaderContainer } from './styles'
import { HeaderTexts } from '../../atoms/Text'

interface HeaderProps {
    bg?: string
    wdt?: string
    hgt?: string
}

export const Headers = ({ bg, wdt, hgt }: HeaderProps) => {
    return (
        <WhiteHeaderContainer
        bg={'white'}
        wdt={wdt}
        hgt={hgt}
        >
            <PersonalIcon
                source={Wizard}
                wdt='45'
                hgt='45'    
            />

            <WhiteHeaderContainer
                bg={'white'}
                wdt={'235'}
                hgt={'20'}
                dir={'column'}
            >
                <HeaderTexts ftSz='15' ftWgt='bold' mgtop='-8' alignSelf='flex-start'>Henrique Oleiro</HeaderTexts>
                <HeaderTexts ftSz='12' mgtop='0' alignSelf='flex-start' >Wizard - Nível 7</HeaderTexts>
            </WhiteHeaderContainer>
            
            <Logo
                source={WhiteWizard}
                wdt='45'
                hgt='45'
                mgTop='15'
            />

        </WhiteHeaderContainer>
    )
}