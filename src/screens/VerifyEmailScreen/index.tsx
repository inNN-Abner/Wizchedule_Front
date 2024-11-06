import React, { useState } from 'react'
import Wizard from '../../../assets/Logo_Wizchedule.png'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { GenericText, NameInput, PasswordInput, SubtitleText, StylezedButton, Container, SubContainer, EmailInput, SignupError, DropdownComponent, Logo } from '../../components'
import { API_URL } from '../../config/constants'
import * as SecureStore from 'expo-secure-store'

export const VerifyScreen = ({ navigation }) => {

  const [emailValue, setEmailValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleAuth = async() => {
    try{
      const resp = await fetch(`${API_URL}/auth/verify`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: emailValue}),
  })
      const data = await resp.json()
      console.log(data)
      console.log(resp.status)
      if(resp.status == 200){

        navigation.navigate('ChangePassword')

      } else setErrorMessage(data.error)

    } catch (e) {
      console.log(e)
      setErrorMessage("Erro ao verificar e-mail")
    } 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>

        {/* <Logo source={Wizard} /> */}
        <GenericText>WiZcHeduLe</GenericText>

        <SubContainer align='center'>

          <SubtitleText mgtop='50' alignSelf='flex-start' >E-mail</SubtitleText>
            <EmailInput
              placeholder=''
              color='darkBlue'
              keyboardType='email-address'
              mgtop='5'
              value={emailValue}
              onChangeText={(text) => setEmailValue(text)}
            />

          <SubContainer align='center'>

            {errorMessage ? <SignupError>{errorMessage}</SignupError> : null}
            
            <StylezedButton label='VERIFICAR' color='white' mgtop='15'   
            onPress={handleAuth}/>     

          </SubContainer>
        </SubContainer>

      </Container>
      
    </TouchableWithoutFeedback>
  )
}
