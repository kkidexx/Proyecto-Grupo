import React from 'react'
import { View,} from 'react-native'
import { Image } from '@rneui/base'
import {styles} from './RegisterScreens.styles'
import RegisterFor from '../../../componets/Auth/RegisterForm/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RegisterScreen=()=> {
  return (
    <KeyboardAwareScrollView>
       <Image
        source={require("../../../../assets/img/tuti.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterFor/>
      </View>
    </KeyboardAwareScrollView>
  )
}
export default RegisterScreen;