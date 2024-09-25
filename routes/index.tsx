import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, SchedulingScreen, ContactsScreen, PerfilScreen } from '../screens'
import { theme } from '../styles/theme'

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

    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    const iconName = routeIcons[route.name as keyof BottomRoutes]
                    return <Ionicons name={iconName} size={theme.metrics.px(27)} color={focused ? 'red' : theme.colors.darkRed}
                    />
                },
                tabBarLabelStyle: { 
                color: theme.colors.darkRed,
                fontSize:theme.metrics.px(11),
                },
                headerShown: false
            })}>
            <Tab.Screen name='Principal' component={HomeScreen} />
            <Tab.Screen name='Agendamentos' component={SchedulingScreen} />
            <Tab.Screen name='Contatos' component={ContactsScreen} />
            <Tab.Screen name='Perfil' component={PerfilScreen} />
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