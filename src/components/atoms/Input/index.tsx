import React from 'react';
import { InputPassword, InputText } from './styles';

//Criando interface
interface InputProps {
    placeholder: string
    color: string
    onChangeText?: (text: string) => void
    keyboardType?: string
    secureTextEntry?: boolean
    mgtop?: string
    mgleft?: string
}

export const TextInput = ({ placeholder, mgtop, mgleft,  }: InputProps) => {
  const [text, onChangeText] = React.useState('')

  return (
      <InputText
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={'default'}
        mgtop={mgtop}
        mgleft={mgleft}
      ></InputText>
  )
}

export const EmailInput = ({ placeholder, mgtop, mgleft,  }: InputProps) => {
  const [text, onChangeText] = React.useState('')

  return (
      <InputText
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={'email-address'}
        mgtop={mgtop}
        mgleft={mgleft}
      ></InputText>
  )
}

export const PasswordInput = ({placeholder, mgtop, secureTextEntry=true}: InputProps) => {
    const [password, setPassword] = React.useState('')
  
    return (
        <InputPassword
          placeholder={placeholder}
          onChangeText={text => setPassword(text)}
          keyboardType={'default'}
          secureTextEntry={secureTextEntry}
          mgtop={mgtop}
        ></InputPassword>
    )
  }