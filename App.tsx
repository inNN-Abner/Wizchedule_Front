import 'react-native-gesture-handler'
import React from 'react'

//Navigations
import { Routes } from './src/routes'


//Themes
import { ThemeProvider } from 'styled-components'
import { theme } from  './src/styles'

//Fonts
import AppLoading from 'expo-app-loading'
import { useFonts, CinzelDecorative_700Bold }  from '@expo-google-fonts/cinzel-decorative'
import { PTSans_400Regular }  from '@expo-google-fonts/pt-sans'
import { Poppins_500Medium, Poppins_300Light_Italic } from '@expo-google-fonts/poppins'


export default function App() {
  //Adicionando as fontes
  let [fontLoaded] = useFonts ({
    CinzelDecorative_700Bold,
    PTSans_400Regular
  })

  //Espera carregar as fontes de texto
  if(!fontLoaded) { 
    return <AppLoading />
  }

  return (
   <ThemeProvider theme={theme}>
      <Routes />
   </ThemeProvider> 
  )
}