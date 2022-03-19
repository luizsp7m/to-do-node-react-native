import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 24,
    paddingHorizontal: 20,
  },

  title: {
    paddingHorizontal: 20,
    textAlign: "center",
    color: COLORS.WHITE,
    paddingVertical: 16,
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: FONTS.BOLD,
  },

  content: {
    paddingTop: 24,
    paddingBottom: 24,
  },
});