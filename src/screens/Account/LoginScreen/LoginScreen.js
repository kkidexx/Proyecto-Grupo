import { View, ScrollView } from "react-native";
import { Text, Image } from "@rneui/themed";
import React from "react";
import { styles } from "./LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screensNames";
import LoginForm from "../../../componets/Auth/LoginForm/LoginForm";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.accounts.regiter);
  };

  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/tuti.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        <Text/>
        <Text>
          <Text style={styles.textRegister}>
            ¿Aun no tienes una cuenta?{"  "}
            <Text style={styles.btnRegister} onPress={goToRegister}>
              Registrate
            </Text>
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
