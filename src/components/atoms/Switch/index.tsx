import React, {useState} from 'react';
import {Image, Switch} from 'react-native';
import styles from './styles'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Country_BR from 'assets/Country_BR.png'
import Country_EN from 'assets/Country_EN.png'

const Switch_lang = ({lang} : {lang : string}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log(lang)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {lang === "BR" ? <Image src={Country_BR}></Image> : "" }
        {lang === "EN" ? <Image src={Country_EN}></Image> : "" }
        <Switch
          trackColor={{false: '#039605', true: '#033180'}}
          thumbColor={isEnabled ? '#b00415' : '#e0c104'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};



export default Switch_lang;