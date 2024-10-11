import { ItemPhoto } from '../../../components/atoms/Photo/styles'
import { Windows, SubContainer, ContactInfo, ContactName  } from '../../../components'

export const IdentificationCard = ({ route }) => {
    
    const { name, photo, registration, account, email } = route.params

    return (
        <Windows
            hgt='150'
            align='center'
            >
            <ItemPhoto
                source={photo}
                hgt='125'
                wdt='80'
                bdrd='20'
                />
            
            <SubContainer mgleft='5' hgt='120' wdt='205' align='left' justify='center' bg='white'>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold'>Nome do professor(a)</ContactInfo>
                <ContactName color='darkGrayII' children={name} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>Matrícula</ContactInfo>
                <ContactName color='darkGrayII' children={registration} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>E-mail</ContactInfo>
                <ContactName color='darkGrayII' children={email} ftWgt='normal' mgtop='-3' ></ContactName>

                <ContactInfo color='darkBlue' ftSz='12' ftWgt='bold' mgtop='3'>Conta</ContactInfo>
                <ContactName color='darkGrayII' children={account} ftWgt='normal' mgtop='-3' ></ContactName>

            </SubContainer>


        </Windows>
    )
}