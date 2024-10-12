import React, { useState } from 'react'
import { theme } from '../../../styles'
import { InputPassword, InputText, TimeInputMask } from './styles'

interface InputProps {
    value?: string
    placeholder: string
    color: string
    bgColor?: string
    mgtop?: string
    mgleft?: string
    pddlft?: string
    wdt?: string
    hgt?: string
    keyboardType?: string
    secureTextEntry?: boolean
    onChangeText?: (text: string) => void
}

export const TextInput = ({ placeholder, mgtop, mgleft, color, bgColor, wdt, hgt  }: InputProps) => {
  const [text, onChangeText] = useState('')

  return (
      <InputText
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={'default'}
        mgtop={mgtop}
        mgleft={mgleft}
        color={color}
        bgColor={bgColor}
        wdt={wdt}
        hgt={hgt}
        placeholderTextColor={theme.colors.gray} 
      />
  )
}

export const EmailInput = ({ value, placeholder, mgtop, mgleft, onChangeText  }: InputProps) => {

  return (
      <InputText
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={'email-address'}
        mgtop={mgtop}
        mgleft={mgleft}
        value={value}
      />
  )
}

export const PasswordInput = ({ value, placeholder, mgtop, onChangeText, secureTextEntry=true }: InputProps) => {
  
  return (
      <InputPassword
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={'default'}
        secureTextEntry={secureTextEntry}
        mgtop={mgtop}
        value={value}
      ></InputPassword>
  )
}

export const TimeInput = ({ pddlft, wdt, hgt, value, placeholder, mgtop, mgleft, onChangeText  }: InputProps) => {
  const [date, setDate] = useState('')

  return (
    <TimeInputMask
      type={'custom'}
      options={{
        mask: '99:99'
      }}
    wdt={wdt}
    hgt={hgt}
    pddlft={pddlft}
    placeholder={placeholder}
    onChangeText={setDate}
    keyboardType={'numeric'}
    mgtop={mgtop}
    mgleft={mgleft}
    value={value}
    textAlign={'center'}
  />
  )
}