import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: COLORS.GRAY_SECONDARY,
  },

  selected: {
    color: COLORS.PINK,
  }
});