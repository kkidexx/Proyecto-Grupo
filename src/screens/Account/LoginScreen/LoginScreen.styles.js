import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    height: 150,
    width: "100%",
    marginBottom:10,
    marginTop:50
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  
    textAlign: "center",
    color: "#302D2D",
  },
  content:{
    marginHorizontal:40,
  },
  textRegister:{
    marginTop:25,
    marginHorizontal:10,
    textAlign:"center"
  },
  btnRegister:{
    color:"#488DCF",
    fontWeight:"bold",
  },
});
