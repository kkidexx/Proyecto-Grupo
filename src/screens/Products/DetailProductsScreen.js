import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./Product.styles";
import { Image } from "@rneui/base";
import { Button } from "@rneui/themed";
import { Card } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import {screen} from '../../utils/screensNames'

const DetailProductsScreen = ({ route, setNewProduct }) => {
  const product = route.params;
  const navigate=useNavigation();
  const navigateToCar=()=>{
    setNewProduct(product);
    navigate.navigate(screen.products.products)
  }
  return (
    <>
      <ScrollView>
        <Card>
          <Card.Title style={styles.content}>Detalles Producto</Card.Title>
          <Card>
            <Text style={styles.content}>{product.name}</Text>
            <Image source={product.image} style={styles.image} />
          </Card>
          <Card>
            <Text style={styles.view}>Precio: ${product.price}</Text>
          </Card>
          <Card>
            <Text style={styles.id}>
              ID:
              <Text style={styles.descrip}> {product.id}</Text>
            </Text>
            <Text style={styles.id}>Descripcion</Text>
            <Text style={styles.descrip}>{product.descrip}</Text>
          </Card>
          <Card>
            <Button
              style={styles.btnAnd}
              title="Añadir al carrito"
              onPress={navigateToCar}
            />
          </Card>
        </Card>
      </ScrollView>
    </>
  );
};

export default DetailProductsScreen;
