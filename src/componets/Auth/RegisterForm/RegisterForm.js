import { View } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from "./RegisterForm.styles";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import { validationSchema } from "./RegisterForm.data";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import {screen} from "../../../utils/screensNames"
import  Toast  from "react-native-toast-message";
const RegisterFor = () => {

  const navegation=useNavigation();

  const[showPassword,setshowPassword]=useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      //console.log("Formulario");
      //console.group(formValue);
      try{
        const auth=getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navegation.navigate(screen.accounts.accounts);
      }catch(error){
         //console.log(error);
         Toast.show({
          type:"error",
          position:"bottom",
          text1:"Error al registrarse",
          text2: "Intentalo de nuevo"
         })
      }
    },
  });

  const showHiddenPassword=()=>{
    setshowPassword(!showPassword);
  };

  return (
    <View styles={styles.content}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.imput}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Password"
        containerStyle={styles.imput}
        secureTextEntry={showPassword ? false: true}
        rightIcon={
          <Icon
            type="material-community"
            name={ showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Confirmar Password"
        containerStyle={styles.imput}
        secureTextEntry={showPassword ? false: true}
        rightIcon={
          <Icon
            type="material-community"
            name={ showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
        errorMessage={formik.errors.confirmPassword}
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegistar}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};
export default RegisterFor;
