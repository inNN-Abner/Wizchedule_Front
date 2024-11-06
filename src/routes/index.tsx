import React, { useEffect, useState } from 'react'
import { theme } from '../styles/theme'
import { Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LoginScreen, HomeScreen, RegisterScreen, ReportSchedulingScreen, SchedulingScreen, ContactsScreen, PerfilScreen, ContactsDetailScreen, AddTeacherScreen, SummaryScheduleScreen } from '../screens'
import { VerifyScreen } from '../screens/VerifyEmailScreen'
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen'

interface BottomRoutes{
    Main: string
    Appointments: string
    Contacts: string
    Perfil: string
}

const routeIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
    Main: 'home',
    Appointments: 'calendar',
    Contacts: 'id-card',
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
            <Tab.Screen name='Main' component={HomeScreen} />
            <Tab.Screen name='Appointments' component={ReportSchedulingScreen} />
            <Tab.Screen name='Contacts' component={ContactsScreen} />
            <Tab.Screen name='Perfil' component={PerfilScreen} />
            <Tab.Screen name='Register' component={RegisterScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='ContactsDetail' component={ContactsDetailScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='AddTeacher' component={AddTeacherScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='AddSchedule' component={SchedulingScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='SummarySchedule' component={SummaryScheduleScreen} options={{ tabBarButton: () => null}} />
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
                <Stack.Screen name='Register' component={RegisterScreen}/>
                <Stack.Screen name='Verify' component={VerifyScreen}/>
                <Stack.Screen name='ChangePassword' component={ChangePasswordScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}