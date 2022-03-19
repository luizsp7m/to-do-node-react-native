import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface FilterProps {
  filter: string;
  onChangeFilter: (slug: string) => void;
}

const filters = [{
  slug: "all", name: "Todos"
}, {
  slug: "today", name: "Hoje"
}, {
  slug: "week", name: "Semana"
}, {
  slug: "month", name: "Mês"
}, {
  slug: "year", name: "Ano"
}];

export function Filter({ filter, onChangeFilter }: FilterProps) {

  return (
    <View style={styles.container}>
      {filters.map((item, index) => (
        <TouchableOpacity key={index}>
          <Text
            style={[styles.text, item.slug === filter && styles.selected]}
            onPress={() => onChangeFilter(item.slug)}
          >{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}