import React, { useState } from 'react'
import Wizard from '../../../assets/Logo_Wizchedule.png'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { GenericText, NameInput, PasswordInput, SubtitleText, StylezedButton, Container, SubContainer, EmailInput, SignupError, DropdownComponent } from '../../components'
import { API_URL } from '../../config/constants'
import * as SecureStore from 'expo-secure-store'

export const RegisterScreen = ({ navigation }) => {
  const [nomeValue, setNomeValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [tipoValue, setTipoValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSignup = async() => {
    try{
      const resp = await fetch(`${API_URL}/auth/register`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({nome: nomeValue, email: emailValue, senha: passwordValue, tipo: tipoValue}),
  })
      const data = await resp.json()
      console.log(data)
      if(resp.status == 200){
        navigation.navigate('Login')

      } else setErrorMessage(data.error)

    } catch (e) {
      console.log(e)
      setErrorMessage("Erro ao efetuar cadastro")
    } 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>

        {/* <Logo source={Wizard} /> */}
        <GenericText>WiZcHeduLe</GenericText>

        <SubContainer align='center'>

        <SubtitleText mgtop='15' alignSelf='flex-start' >Nome</SubtitleText>
            <NameInput
              placeholder=''
              color='darkBlue'
              keyboardType='default'
              mgtop='5'
              value={nomeValue}
              onChangeText={(text) => setNomeValue(text)}
            />

          <SubtitleText mgtop='20' alignSelf='flex-start' >E-mail</SubtitleText>
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
          
          <SubtitleText mgtop='20' alignSelf='flex-start' >Tipo</SubtitleText>
            <DropdownComponent value={tipoValue} onChangeValue={setTipoValue}/>

          <SubContainer align='center'>

            {errorMessage ? <SignupError>{errorMessage}</SignupError> : null}
            
            <StylezedButton label='CADASTRAR' color='white' mgtop='10'         
            onPress={handleSignup}/>
            
            {/* <StylezedButton label='CADASTRAR' bg='white' color='darkRed' mgtop='10'/> */}
            {/* <StylezedButton label='Esqueci a senha' bg='darkBlue' color='white' mgtop='20' wdt='200'/> */}

          </SubContainer>
        </SubContainer>

      </Container>
      
    </TouchableWithoutFeedback>
  )
}
