import { StyleSheet } from "react-native";

export const style=StyleSheet.create({
    viewBody:{
        marginHorizontal:30,
    },
    image:{
        resizeMode:"contain",
        height:300,
        width:"100%",
        marginBottom:40
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        marginBottom:10,
        textAlign:"center",
        color:"#302D2D"
    },
    description:{
        fontWeight:"normal",
        fontSize:15,
        marginBottom:10,
        textAlign:"center",
        color:"#2E4053",
    },
    btnStyle:{
        backgroundColor:"#488DCF",
        width: 160,
        marginHorizontal:100,
        marginVertical: 10,
    },
});