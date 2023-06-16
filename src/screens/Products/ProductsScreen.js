import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/screensNames";
import { styles } from "./Product.styles";
import { products } from "../../utils/products";
import { Card } from "@rneui/themed";

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        {products.map((product) => {
          return (
            <ListItem
              onPress={() =>
                navigation.navigate(screen.products.detailProduct, product)
              }
            >
              <ListItem.Content>
                <Image source={product.image} style={styles.image1}/>
              </ListItem.Content>
              <ListItem.Content>
                <ListItem.Title style={styles.Text}>
                  {product.name}
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Content>
                <ListItem.Subtitle style={styles.Subtitle}>
                  ${product.price}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ProductsScreen;
