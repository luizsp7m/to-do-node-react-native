import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    // flex: 1,
  },

  content: {
    paddingBottom: 24,
  },

  group: {
    marginBottom: 24,
  },

  label: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginBottom: 10,
  },

  input: {
    height: 44,
    backgroundColor: COLORS.BLACK_TERTIARY,
    borderRadius: 4,
    padding: 12,
    color: COLORS.GRAY_SECONDARY,
  },

  inputArea: {
    height: 88,
    backgroundColor: COLORS.BLACK_TERTIARY,
    borderRadius: 4,
    padding: 12,
    color: COLORS.GRAY_SECONDARY,
    textAlignVertical: "top",
  },

  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  switch: {
    flexDirection: "row",
    alignItems: "center",
  },

  switchLabel: {
    fontSize: 14,
    color: COLORS.PINK,
    fontFamily: FONTS.BOLD,
  },

  button: {

  },

  buttonText: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  inputDate: {
    height: 44,
    backgroundColor: COLORS.BLACK_TERTIARY,
    borderRadius: 4,
    padding: 12,
    color: COLORS.WHITE,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  buttonIcon: {
    position: "absolute",
    right: 15,
  },

  imageIcon: {
    width: 20,
    height: 20,
  },

  dateText: {
    color: COLORS.WHITE,
  },

  buttonSubmit: {
    height: 48,
    backgroundColor: COLORS.PINK,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 12,
  },

  textSubmit: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },
});