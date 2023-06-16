import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import { Image } from "@rneui/base";
import { styles } from "../screens/Products/Product.styles";
import { ListItem } from "@rneui/themed";
import { useState, useEffect } from "react";

const ShoppingCart = ({ newProduct }) => {
  let total = 0;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (newProduct != null) {
      setProducts([...products, newProduct]);
      //total=total+products.price
      console.log(products);
    }
  }, [newProduct]);

  return (
    <ScrollView>
      <View>
        {products.map((products) => {
          total=total+products.price;
          return (
            <Card>
              <ListItem.Title>
                {products.name} {products.price}
              </ListItem.Title>
            </Card>
          );
        })}
        <Card>
          <Text>Total a pagar: {total}</Text>
        </Card>
      </View>
    </ScrollView>
  );
};
export default ShoppingCart;
