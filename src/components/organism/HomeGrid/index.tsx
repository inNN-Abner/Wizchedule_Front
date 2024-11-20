import React from 'react'
import informacoes from '../../../../arquivosTeste/informacoes'
import aulasDisponiveis from '../../../../arquivosTeste/aulasDisponiveis'
import { FlatList, Text } from 'react-native'
import { PerfilGridSkeleton } from '../../molecules'
import { ContactPhoto, ListContainer, SubContainer, Windows } from '../../atoms'
import { ContactInfoText } from '../../atoms/Text/styles'

export const HomeGrid = () => {
    return (
    <SubContainer 
        hgt='260'
        wdt='360'
        align='center'
        mgtop='10'
        mgleft='0'
        bg='white'>
    <Windows 
          bg='darkRed'
          hgt='50'
          wdt='355'
          bdrdBL='0'
          bdrdBR='0'
          justify='flex-start'
          mgtop='5'
        >
          <ContactInfoText
            color='white'
            mgleft='20'
            mgtop='10'
            ftSz='18'
          >{'Lembretes e avisos'}</ContactInfoText>
        </Windows>

            <Windows
                dir='column'
                justify='center'
                align='center'
                mgtop='-5'
                bdrdTL='0'
                bdrdTR='0'
                wdt='355'
                hgt='205'
                bg='darkBlue'
            >
                <FlatList data={ informacoes } renderItem={({ item }) => (

                        <ListContainer
                            mgtop='0'
                            mgleft='0'
                            bg='darkGrayII'
                            dir='column'
                            align='center'
                            justify='flex-start'
                            wdt='350'
                            hgt='200'
                        >

                            <PerfilGridSkeleton 
                                pdd='10'
                                align='flex-start'
                                wdt='335'
                                mgleft='0' 
                                ftSz='15'
                                mgtop='10'
                                bdrd='10'
                                color='darkBlue'
                                bg='white'
                                >{item.titulo}</PerfilGridSkeleton>

                            <PerfilGridSkeleton 
                                ftSz='14'
                                wdt='335'
                                mgtop='7'
                                mgleft='0'
                                hgt='110'
                                bdrd='10'
                                align='flex-start'
                                pdd='10'
                                ftype='pageSubtitle'
                                txtalign='flex-start'>
                                {item.texto}</PerfilGridSkeleton>

                        </ListContainer>
                    )}
                    >
                    </FlatList>
            </Windows>
    </SubContainer>
    )
}

export const ClassGrid = () => {
    return (
    <SubContainer 
        hgt='265'
        wdt='360'
        align='center'
        mgtop='5'
        mgleft='0'
        bg='white'>
    <Windows 
          bg='darkRed'
          hgt='50'
          wdt='355'
          bdrdBL='0'
          bdrdBR='0'
          justify='flex-start'
          mgtop='5'
        >
          <ContactInfoText
            color='white'
            mgleft='20'
            mgtop='10'
            ftSz='18'
          >{'Quinta-feira'}</ContactInfoText>
        </Windows>

            <Windows
                dir='row'
                justify='center'
                align='center'
                mgtop='-5'
                bdrdTL='0'
                bdrdTR='0'
                wdt='355'
                hgt='210'
                bg='darkGrayII'
            >
                <FlatList data={ aulasDisponiveis } renderItem={({ item }) => (

                        <ListContainer
                            mgtop='0'
                            mgleft='0'
                            bg='darkGrayII'
                            dir='row'
                            align='center'
                            justify='flex-start'
                            wdt='160'
                            hgt='65'
                        >
                    
                        <SubContainer dir='row' bg='white' wdt='175' hgt='55' align='center' bdrd='10' mgleft='5' mgtop='10'>
                            <ContactPhoto
                            hgt='35'
                            wdt='40'
                            mgleft='3'
                            source={item.photo}/>

                            <PerfilGridSkeleton 
                                pdd='5'
                                align='flex-start'
                                wdt='125'
                                hgt='50'
                                mgleft='0' 
                                ftSz='14'
                                mgtop='0'
                                color='darkBlue'
                                bg='white'
                                ftype='regular'
                                >
                                
                                {item.professor}

                            </PerfilGridSkeleton>
                        </SubContainer>
                            
                        <SubContainer dir='row' bg='gray' wdt='165' hgt='55' align='center' bdrd='10' mgleft='5' mgtop='10'>
                            <ContactPhoto
                                hgt='30'
                                wdt='35'
                                mgleft='5'
                                source={item.bandeira}/>
                            
                            <PerfilGridSkeleton 
                                ftSz='14'
                                wdt='115'
                                hgt='55'
                                mgtop='0'
                                mgleft='0'
                                bdrd='50'
                                align='flex-start'
                                pdd='5'
                                ftype='pageSubtitle'
                                >
                                
                                <Text style={{ fontWeight: 'bold' }}>{item.idioma}</Text> {'\n'} {item.info}
                            </PerfilGridSkeleton>
                        </SubContainer>

                        </ListContainer>
                    )}
                    >
                    </FlatList>
            </Windows>
    </SubContainer>
    )
}