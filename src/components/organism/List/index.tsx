import React from 'react'
import { ListContainer, ContactPhoto, ContactName, ContactInfo, SubContainer } from '../../atoms'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import contacts from '../../../../contacts'
import { FlatList } from 'react-native'

export const ListOfContacts = ({ navigation }) => {
    return (       
        <ScrollView>
        <FlatList data={ contacts } renderItem={({ index, item }) => (
        
            <TouchableOpacity onPress={() => {navigation.navigate('ContactsDetail')}}>
                <ListContainer>
                    
                    <ContactPhoto
                        source={item.photo}/>

                        <SubContainer
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
        > 
        </FlatList>
        </ScrollView>
    )
}
