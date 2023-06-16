import { View, ScrollView } from "react-native";
import React from "react";
import { style } from "./UserGuestScreen.styles";
import { Text, Button, Image } from "@rneui/themed";
import { screen } from "../../../utils/screensNames";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  const navigation = useNavigation();

  const goToLoging = () => {
    navigation.navigate(screen.accounts.login);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={style.viewBody}
    >
      <Text style={style.title}>Consultar tu perfil </Text>
      <Text style={style.title}>Tuti Supermecado</Text>
      <Image
        source={require("../../../../assets/img/Login_1.jpg")}
        style={style.image}
      />
      <Text style={style.description}>Alto en calidad, bajo en precio</Text>
      <Text style={style.description}>
        Tiendas TuTi vendemos un pequeno surtido que incluye los artículos mas
        importantes de consumo diario. Ademas, ofrecemos muchos productos
        interesantes de excelente calidad a los precios más bajo del mercado.
      </Text>
      <Button
        title="Ver perfil"
        onPress={goToLoging}
        buttonStyle={style.btnStyle}
      />
    </ScrollView>
  );
};

export default UserGuestScreen;
