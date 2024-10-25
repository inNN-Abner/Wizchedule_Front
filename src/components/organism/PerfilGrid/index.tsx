import React from 'react'
import horarios from '../../../../arquivosTeste/horarios'
import { FlatList, Text } from 'react-native'
import { PerfilGridSkeleton } from '../../molecules'
import { AddButton, EditButton, ListContainer, TrashButton } from '../../atoms'

export const PerfilGrid = ({ navigation }) => {
    return (
    <>
    <FlatList data={ horarios } renderItem={({ item }) => (

            <ListContainer
                mgtop='-3'
                mgleft='0'
                bg='darkGrayII'
                dir='row'
            >

                <PerfilGridSkeleton ftSz='12' color='white'>{item.diaSemana}</PerfilGridSkeleton>
                <PerfilGridSkeleton ftSz='14' wdt='140' ftype='regular'>
                    <Text style={{ fontWeight: 'bold' }}>{item.modalidade}</Text> {`\n`} {item.horario}</PerfilGridSkeleton>

                <EditButton onPress={() => {
                    navigation.navigate('AddSchedule', {
                        id: item.id,
                        diaSemana: item.diaSemana,
                        horario: item.horario,
                        modalidae: item.modalidade
                    })
                }}

                    label={'Teste'}
                    wdt='45'
                    hgt='50'
                    bdrd='10'
                    mgtop='3'
                    mgleft='5'
                    bg='white' />

                <TrashButton
                    label={'Teste'}
                    wdt='45'
                    hgt='50'
                    bdrd='10'
                    mgtop='3'
                    mgleft='5'
                    bg='darkRed' />

            </ListContainer>
        )}
        >
        </FlatList>
        
        <ListContainer
            mgtop='0'
            mgleft='0'
            bg='darkGrayII'
            dir='row'
        >

        <PerfilGridSkeleton bg='darkRed' color='white' ftSz='14' wdt='225' ftype='regular'>
            <Text style={{ fontWeight: 'bold' }}>Adicionar</Text> {'\n'} novo horário</PerfilGridSkeleton>

            <AddButton
            wdt='96'
            hgt='50'
            bdrd='10'
            mgtop='3'
            mgleft='5'
            bg='darkRed'
            onPress={() => {
                navigation.navigate('AddSchedule')
            }} />
        </ListContainer>
    </> 
    )
}