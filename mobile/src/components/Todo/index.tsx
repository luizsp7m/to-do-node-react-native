import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function Todo() {
  return (
    <View style={styles.container}>
      <View style={styles.type}>
        <Text style={styles.typeText}>Entregar relatório</Text>
      </View>

      <View style={styles.when}>
        <Text style={styles.date}>18/03/2022</Text>
        <Text style={styles.hour}>17:00</Text>
      </View>
    </View>
  );
}