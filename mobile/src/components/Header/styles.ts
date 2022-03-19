import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },

  logo: {
    fontSize: 20,
    fontFamily: FONTS.BOLD,
    color: COLORS.PINK,
  },

  qrcode: {
    width: 20,
    height: 20,
  },

  notification: {
    position: "relative",
  },

  bell: {
    width: 20,
    height: 20,
  },

  arrow: {
    width: 15,
    height: 15,
  },

  notifications: {
    position: "absolute",
    left: 10,
    bottom: 10,
    backgroundColor: COLORS.PINK,
    width: 20,
    height: 20,
    borderRadius: 10,
    fontSize: 12,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    textAlign: "center",
  }
});