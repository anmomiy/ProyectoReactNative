import { StyleSheet } from "react-native";
import { fontSize } from "../../constants";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containterScroll: {
    flex: 1,
  },
  title: {
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
  },
  label: {
    fontSize: fontSize.small,
    color: colors.text,
    paddingVertical: 5,
    textAlign: "center",
    fontFamily: "Nunito-Regular",
  },
  input: {
    width: "100%",
    maxWidth: 200,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    fontSize: fontSize.small,
    paddingVertical: 10,
    textAlign: "center",
    fontFamily: "Nunito-Regular",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  confirmedName: {
    fontSize: fontSize.medium,
    fontFamily: "Nunito-Bold",
  },
  confirmedTitle: {
    fontSize: fontSize.small,
    fontFamily: "Nunito-Regular",
  },
});