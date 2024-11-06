import React, { useState } from 'react'
import Wizard from '../../../assets/Logo_Wizchedule.png'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { GenericText, NameInput, PasswordInput, SubtitleText, StylezedButton, Container, SubContainer, EmailInput, SignupError, DropdownComponent, Logo } from '../../components'
import { API_URL } from '../../config/constants'
import * as SecureStore from 'expo-secure-store'

export const ChangePasswordScreen = ({ navigation }) => {

  const [passwordValue, setPasswordValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = async() => {
    try{

      const resp = await fetch(`${API_URL}/auth/ChangePassword`,{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ novaSenha: passwordValue }),
  })
      const data = await resp.json()
      console.log(data)
      if(resp.status == 200){
        navigation.navigate('Login')

      } else setErrorMessage(data.error)

    } catch (e) {
      console.log(e)
      setErrorMessage("Erro ao registrar nova senha")
    } 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>

        {/* <Logo source={Wizard} /> */}
        <GenericText>WiZcHeduLe</GenericText>

        <SubContainer align='center'>

          <SubtitleText mgtop='50' alignSelf='flex-start' >Nova Senha</SubtitleText>
            <EmailInput
              placeholder=''
              color='darkBlue'
              keyboardType='password'
              mgtop='5'
              value={passwordValue}
              onChangeText={(text) => setPasswordValue(text)}
            />

          <SubContainer align='center'>

            {errorMessage ? <SignupError>{errorMessage}</SignupError> : null}
            
            <StylezedButton label='ALTERAR SENHA' color='white' mgtop='15'
            //onPress={() => navigation.navigate('Login')}         
            onPress={handleChange} />

          </SubContainer>
        </SubContainer>

      </Container>
      
    </TouchableWithoutFeedback>
  )
}
