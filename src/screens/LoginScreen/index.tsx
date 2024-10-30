import React, { useState } from 'react'
import Wizard from '../../../assets/Logo_Wizchedule.png'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { GenericText, Logo, PasswordInput, SubtitleText, StylezedButton, Container, SubContainer, EmailInput, LoginError  } from '../../components'
import { API_URL } from '../../config/constants'
import * as SecureStore from 'expo-secure-store'

const mockUserTest = {
  email: 'A',
  password: '1'
}

export const LoginScreen = ({ navigation }) => {

  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(' ')

  const handleLogin = async() => {
    try{
      const resp = await fetch(`${API_URL}/auth/login`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: emailValue, senha: passwordValue}),
  })
  
      if(resp.status == 200){
        const data = await resp.json()

        SecureStore.setItemAsync('token', data.token)

        if (data.tipo == 'Aluno') navigation.navigate('Home')
        else navigation.navigate('Home')

      } else setErrorMessage('E-mail ou senha inválidos!')

    } catch (e) {
      console.log(e)
      setErrorMessage("Erro ao efetuar login")
    } 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>

        <Logo source={Wizard} />
        <GenericText>WiZcHeduLe</GenericText>

        <SubContainer align='center'>

          <SubtitleText mgtop='15' alignSelf='flex-start' >E-mail</SubtitleText>
            <EmailInput
              placeholder=''
              color='darkBlue'
              keyboardType='email-address'
              mgtop='5'
              value={emailValue}
              onChangeText={(text) => setEmailValue(text)}
            />

          <SubtitleText mgtop='20' alignSelf='flex-start' >Senha</SubtitleText>
            <PasswordInput
              placeholder=''
              mgtop='5'
              color='darkBlue'
              keyboardType='default'
              secureTextEntry={true}
              value={passwordValue}
              onChangeText={(text) => setPasswordValue(text)}
            />
          
          <SubContainer align='center'>

            {errorMessage ? <LoginError>{errorMessage}</LoginError> : null}
            
            <StylezedButton label='ENTRAR' color='white' mgtop='10'         
            onPress={handleLogin}/>
            
            <StylezedButton label='CADASTRAR' bg='white' color='darkRed' mgtop='10'></StylezedButton>
            <StylezedButton label='Esqueci a senha' bg='darkBlue' color='white' mgtop='20'></StylezedButton>

          </SubContainer>
        </SubContainer>

      </Container>
      
    </TouchableWithoutFeedback>
  )
}
