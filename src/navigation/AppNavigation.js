import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { screen } from "../utils/screensNames";
import ShoppingCartStack from "./ShoppingCartStack";
import HomeStack from "./HomeStack";
import AccountsStack from "./AccountsStack";
import ShoppingCart from "../screens/ShoppingCart";

const Tab = createBottomTabNavigator();

export const AppNavigator = ({ newProduct, setNewProduct }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: "#F1F136",
        tabBarInactiveBackgroundColor: "#FFFFFF",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.home.tab}
        //component={HomeStack}
        options={{ title: "Productos" }}
        children={(props) => (
          <HomeStack {...props} setNewProduct={setNewProduct} />
        )}
      />
      <Tab.Screen
        name={screen.shoppingCart.tab}
        //component={ShoppingCartStack}
        options={{ title: "Carrito de Compras" }}
        children={(props) => (
          <ShoppingCartStack {...props} newProduct={newProduct} />
        )}
      />
      <Tab.Screen
        name={screen.accounts.accounts}
        component={AccountsStack}
        options={{ title: "Inicio de Sesion" }}
      />
    </Tab.Navigator>
  );
};
const screenOptions = (route, color, size) => {
  let iconName;
  if (route.name == screen.home.tab) {
    iconName = "home";
  }
  if (route.name == screen.shoppingCart.tab) {
    iconName = "cart-minus";
  }
  if (route.name == screen.accounts.accounts) {
    iconName = "login";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};
