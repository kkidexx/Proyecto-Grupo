import { View, ActivityIndicator } from "react-native";
import React from "react";
import { Overlay, Text } from "@rneui/base";
import { styles } from "./LoadingModa.stayles";

const LoadingModa = (props) => {
  const { show = false, text } = props;

  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
      <ActivityIndicator
        size="large" //lg,sm,nd
        color="#28B463"/>
      {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
};
export default LoadingModa;

