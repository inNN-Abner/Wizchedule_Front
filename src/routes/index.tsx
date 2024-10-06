import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, SchedulingScreen, ContactsScreen, PerfilScreen, ContactsDetailScreen } from '../screens'
import { theme } from '../styles/theme'
import { Keyboard } from 'react-native'

interface BottomRoutes{
    Principal: string
    Agendamentos: string
    Contatos: string
    Perfil: string
}

const routeIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
    Principal: 'home',
    Agendamentos: 'calendar',
    Contatos: 'id-card', //people-circle
    Perfil: 'person'
}

const BottomRoute = () => {
    const Tab = createBottomTabNavigator()
    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true)
        })
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false)
        })

        return () => {
            keyboardDidHideListener.remove()
            keyboardDidShowListener.remove()
        }
    }, [])
    
    return (
        <Tab.Navigator  
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const iconName = routeIcons[route.name as keyof BottomRoutes]
                    return <Ionicons name={iconName} size={theme.metrics.px(34)} color={focused ? 'red' : theme.colors.darkRed}/>
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: isKeyboardVisible ? 'none' : 'flex',
                },
            })}>
            <Tab.Screen name='Principal' component={HomeScreen} />
            <Tab.Screen name='Agendamentos' component={SchedulingScreen} />
            <Tab.Screen name='Contatos' component={ContactsScreen} />
            <Tab.Screen name='Perfil' component={PerfilScreen} />
            <Tab.Screen name='ContactsDetail' component={ContactsDetailScreen} options={{ tabBarButton: () => null}} />
                
        </Tab.Navigator>
    )
}

export const Routes = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Home' component={BottomRoute} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}