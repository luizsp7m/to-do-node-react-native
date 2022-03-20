import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { Icons } from "../../utils/icons";

import { styles } from "./styles";

interface CategoriesProps {
  type: number | undefined;
  onChangeType: (typeNumber: number) => void;
}

export function Categories({ type, onChangeType }: CategoriesProps) {
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      {Icons.map(icon => (
        <TouchableOpacity
          style={styles.button}
          key={icon.id}
          onPress={() => onChangeType(icon.id)}
        >
          <Image
            source={icon.image}
            style={[styles.image, type !== undefined ? (type === icon.id ? styles.selected : styles.disabled) : styles.default ]}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}