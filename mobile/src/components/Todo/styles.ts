import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK_TERTIARY,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
  },

  done: {
    opacity: 0.5,
  },

  type: {
    flexDirection: "row",
    alignItems: "center",
  },

  typeText: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
  },

  typeImage: {
    width: 40,
    height: 40,
    marginRight: 14,
  },

  when: {
    alignItems: "flex-end",
  },

  date: {
    fontSize: 14,
    marginBottom: 16,
    color: COLORS.PINK,
    fontFamily: FONTS.REGULAR,
  },

  hour: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
  },
});