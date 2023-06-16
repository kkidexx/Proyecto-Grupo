import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screensNames";
import AccountScreens from "../screens/Account/AccountScreens";
import LoginScreen from "../screens/Account/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/Account/RegisterScreen/RegisterScreen";

const Stack = createNativeStackNavigator();

const AcconuntsStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.accounts.accounts}
        component={AccountScreens}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={screen.accounts.login}
        component={LoginScreen}
        options={{ title: "Inicio de Sesión" }}
      />
      <Stack.Screen
        name={screen.accounts.regiter}
        component={RegisterScreen}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  );
};

export default AcconuntsStacks;
