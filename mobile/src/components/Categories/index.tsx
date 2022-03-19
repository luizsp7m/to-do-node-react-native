import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { Icons } from "../../utils/icons";

import { styles } from "./styles";

export function Categories() {
  const [typeSelected, setTypeSelected] = useState<number | undefined>();

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      {Icons.map(type => (
        <TouchableOpacity
          style={styles.button}
          key={type.id}
          onPress={() => setTypeSelected(type.id)}
        >
          <Image
            source={type.image}
            style={[styles.image, typeSelected === type.id ? styles.selected : styles.disabled]}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}