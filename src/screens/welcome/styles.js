import { StyleSheet } from "react-native";
import { fontSize } from "../../constants";
import { colors } from "../../constants";
export const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    welcome: {
      fontSize: fontSize.medium,
      fontFamily: "Nunito-Medium",
      color: colors.text,
      textAlign: "center",
      paddingVertical: 20,
    },
    inputContainer: {
      width: "75%",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
      marginVertical: 20,
    }
})