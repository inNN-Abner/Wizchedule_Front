import React from 'react'
import horarios from '../../../../horarios'
import { EditButton, ListContainer, StylezedButton } from '../../atoms'
import { FlatList, Text } from 'react-native'
import { PerfilGridSkeleton } from '../../molecules'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';

export const PerfilGrid = () => {
    return (
       
        <FlatList data={ horarios } renderItem={({ index, item }) => (
            <ListContainer 
            mgtop='-3'
            mgleft='0'
            bg='darkGrayII'
            >
                <PerfilGridSkeleton ftSz='12' color='white'>{item.diaSemana}</PerfilGridSkeleton>
                <PerfilGridSkeleton ftSz='14' wdt='140' ftype='regular' >
                    <Text style={{fontWeight: 'bold'}}>{item.modalidade}</Text> {`\n`} {item.horario}</PerfilGridSkeleton>

                <EditButton 
                label={'Teste'}
                wdt='45'
                hgt='50'
                bdrd='10'
                mgtop='3'
                mgleft='5'
                bg='white'
                >
                    <FontAwesome name="pencil" size={24} color="black" />
                </EditButton>
                <EditButton 
                label={'Teste'}
                wdt='45'
                hgt='50'
                bdrd='10'
                mgtop='3'
                mgleft='5'
                bg='darkRed'
                >
                    <Fontisto name="trash" size={24} color="white" />
                </EditButton>

            </ListContainer>

        )}
        >
        </FlatList>
    )
}