import React, { useState } from 'react'
import Wizard from '../../../assets/Logo_Wizchedule.png'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { GenericText, Logo, PasswordInput, SubtitleText, StylezedButton, Container, SubContainer, EmailInput, LoginError  } from '../../components'
import Switch_lang from '../../components/atoms/Switch'


const mockUserTest = {
  email: 'Abner',
  password: '1234'
}

export const LoginScreen = ({ navigation }) => {

  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(' ')

  const handleLogin = () => {
    if (emailValue === mockUserTest.email && passwordValue === mockUserTest.password) {
      navigation.navigate('Home')
    } else {
      setErrorMessage ('E-mail ou senha inválidos!')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>

        <Logo source={Wizard} />
        <GenericText>WiZcHeduLe</GenericText>
            <Switch_lang lang="EN"/>
            <Switch_lang lang="BR"/>
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
            <StylezedButton label='Esqueci a senha' bg='darkBlue' color='white' mgtop='48'></StylezedButton>

          </SubContainer>
        </SubContainer>

      </Container>
      
    </TouchableWithoutFeedback>
  )
}
