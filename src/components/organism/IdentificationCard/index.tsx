import { Windows, Container, SubContainer, ContactInfo, ContactName, ListContainer  } from '../../../components'
import Wizard from '../../../../assets/Icon_2.png'
import { ItemPhoto } from '../../../components/atoms/Photo/styles'

interface IdCardProps {
    children?: React.ReactNode
}

export const IdentificationCard = ({ children }: IdCardProps) => {
    return (
        <Windows
            hgt='150'
            align='center'
            >
            <ItemPhoto
                source={Wizard}
                hgt='125'
                wdt='80'
                bdrd='20'
                />
            
            <SubContainer mgleft='5' hgt='120' wdt='205' align='left' justify='center' bg='white'>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold'>Nome do professor(a)</ContactInfo>
                <ContactName color='darkGrayII' children={'Albus Dumbledore'} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>Matrícula</ContactInfo>
                <ContactName color='darkGrayII' children={'A010DO1'} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>E-mail</ContactInfo>
                <ContactName color='darkGrayII' children={'albus.dumbledore@email.com'} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>Conta</ContactInfo>
                <ContactName color='darkGrayII' children={'Wizard - Professor'} ftWgt='normal' mgtop='-3' ></ContactName>

            </SubContainer>


        </Windows>
    )
}