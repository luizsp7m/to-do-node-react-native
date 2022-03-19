import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import IconAdd from "../../assets/add.png";
import IconConfirm from "../../assets/confirm.png";

interface FooterProps {
  icon: "add" | "confirm";
}

export function Footer({ icon }: FooterProps) {
  return (
    <View style={styles.container}>
      {icon === "add" ? (
        <TouchableOpacity style={styles.button}>
          <Image
            source={IconAdd}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button}>
          <Image
            source={IconConfirm}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      <Text style={styles.text}>Texto do Footer</Text>
    </View>
  );
}