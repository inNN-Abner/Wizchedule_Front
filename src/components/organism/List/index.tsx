import React, { useState } from 'react'
import contacts from '../../../../contacts'
import { FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native'
import { ListContainer, ContactPhoto, ContactName, ContactInfo, SubContainer } from '../../atoms'

export const ListOfContacts: React.FC<{ navigation: any; list: any[] }> = ({ navigation, list }) => {

    return (       
        <ScrollView>
        <FlatList data={ list }
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({ item }) => (
        
            <TouchableOpacity onPress={() => {
                navigation.navigate('ContactsDetail', {
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    info: item.info,
                    photo: item.photo,
                    account: item.account,
                    registration: item.registration
                })
            }}>
                <ListContainer>
                    
                    <ContactPhoto
                        source={item.photo}/>

                        <SubContainer
                        mgleft='0'
                        bg='white'
                        justify='center'
                        hgt='48'
                        wdt='250'
                        >
                            <ContactName
                            color='darkBlue'
                            >{item.name}
                            </ContactName>
                            
                            <ContactInfo
                            color='darkGray'
                            >{item.info}
                            </ContactInfo>
                        </SubContainer>
                    
                </ListContainer>
            </TouchableOpacity>  
            )}
        />
        </ScrollView>
    )
}
