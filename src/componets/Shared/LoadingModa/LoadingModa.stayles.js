//Hoja de estilos
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay:{
        height:100,
        width:130,
        backgroundColor:"#fff",
        borderColor:"#00a680",
        borderWidth: 2,
        borderRadius:12
    },
    view:{
        flex:1,
        alignItems:"center"
    },
    text:{
        color:"#00a680",
        textTransform:"uppercase",
        marginTop:15,
    }
});