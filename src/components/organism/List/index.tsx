import React from 'react'
import { ListContainer, ContactPhoto, ContactName, ContactInfo, SubContainer } from '../../atoms'
import AlbusDumbledore from '../../../../assets/Icon_2.png'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import contacts from '../../../../contacts.tsx'
import { FlatList } from 'react-native'

export const ListOfContacts = () => {
    return (       
        <ScrollView>
        <FlatList data={contacts} renderItem={({index, item}) => (
        
            <TouchableOpacity >
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
