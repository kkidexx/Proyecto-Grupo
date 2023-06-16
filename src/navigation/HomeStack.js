import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screensNames";
import ProductsScreen from "../screens/Products/ProductsScreen";
import DetailProductsScreen from "../screens/Products/DetailProductsScreen";

const Stack = createNativeStackNavigator();
const HomeStack = ({ setNewProduct }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.products.products}
        component={ProductsScreen}
        options={{ title: "Productos" }}
      />
      <Stack.Screen
        name={screen.products.detailProduct}
        //component={DetailProductsScreen}
        options={{ title: "Detalle" }}
        children={(props) => (
          <DetailProductsScreen {...props} setNewProduct={setNewProduct} />
        )}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
