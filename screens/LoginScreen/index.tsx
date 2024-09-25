import React from 'react'
import { LoginText, Logo, PasswordInput, TextInput, SubtitleText, StylezedButton, Container, SubContainer  } from '../../components'
import Wizard from '../../../assets/Logo_Wizchedule.png'

export const LoginScreen = ({ navigation }) => {

  return (
    <Container align='center'>
      <Logo source={Wizard} />
      <LoginText>WiZcHeduLe</LoginText>

      <SubContainer align='center'>

        <SubtitleText mgtop='15' alignSelf='flex-start' >E-mail</SubtitleText>
        <TextInput
          placeholder=''
          color='darkBlue'
          keyboardType='email-address'
          mgtop='5'
        ></TextInput>

        <SubtitleText mgtop='20' alignSelf='flex-start' >Senha</SubtitleText>
        <PasswordInput
          placeholder=''
          color='darkBlue'
          keyboardType='default'
          secureTextEntry={true}
          mgtop='5'
        ></PasswordInput>
        
        <SubContainer align='center'>

          <StylezedButton label='ENTRAR' color='white' mgtop='30'
          onPress={() => navigation.navigate('Home')}></StylezedButton>
          <StylezedButton label='CADASTRAR' bg='white' color='darkRed' mgtop='10'></StylezedButton>
          <StylezedButton label='Esqueci a senha' bg='darkBlue' color='white' mgtop='50'></StylezedButton>

        </SubContainer>
      </SubContainer>

    </Container>
  )
}
