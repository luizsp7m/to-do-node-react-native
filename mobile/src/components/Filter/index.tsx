import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Filter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Hoje</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Semana</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Mês</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Ano</Text>
      </TouchableOpacity>
    </View>
  );
}