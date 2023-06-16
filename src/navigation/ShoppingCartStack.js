import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {screen} from '../utils/screensNames'
import ShoppingCartScreen from '../screens/ShoppingCart'

const Stack = createNativeStackNavigator();
const ShoppingCartStack=({newProduct})=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.shoppingCart.shoppingCart}
        //component={ShoppingCartScreen}
        options={{ title: "Carrito" }}
        children={(props)=>(
          <ShoppingCartScreen {...props} newProduct={newProduct}/>
        )}
      />
    </Stack.Navigator>
  )
}
export default ShoppingCartStack;