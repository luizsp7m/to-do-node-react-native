import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 38,
    paddingBottom: 16,
    backgroundColor: COLORS.BLACK_SECONDARY,
    alignItems: "center",
    position: "relative",
    borderTopColor: COLORS.BLACK_SECONDARY,
    borderTopWidth: 4,
  },

  button: {
    position: "absolute",
    bottom: 46,
  },

  icon: {
    width: 60,
    height: 60,
    borderWidth: 4,
    borderColor: COLORS.WHITE,
    borderRadius: 30,
  },

  text: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
  },
});