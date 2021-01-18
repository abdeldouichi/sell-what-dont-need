import {StyleSheet} from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
    button: {
        width: "100%",
        borderRadius: 25,
        padding: 15,
        justifyContent: "center",
        alignItems:"center",
        marginVertical : 10,
    },
    text:{
        fontSize:18,
        color:colors.white
    }
});