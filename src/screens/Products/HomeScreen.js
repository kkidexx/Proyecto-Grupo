import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/screensNames";
import { products } from "../../utils/products";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        {products.map((products) => {
          return (
            <ListItem
              onPress={() =>
                navigation.navigate(screen.home.detailProduct, products)//console.log(products) 
              }
            >
              <ListItem.Content>
                <ListItem.Title>{products.name}</ListItem.Title>
                <ListItem.Subtitle>{products.price}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
