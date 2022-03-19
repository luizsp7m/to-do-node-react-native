import { useState } from "react";
import { ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../theme";
import { Categories } from "../Categories";

import { styles } from "./styles";

export function Form() {
  const [done, setDone] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Categories />

      <View style={styles.group}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          maxLength={30}
          placeholder="Nome da tarefa"
          placeholderTextColor={COLORS.GRAY_SECONDARY}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Detalhes</Text>
        <TextInput
          style={styles.inputArea}
          maxLength={200}
          multiline={true}
          placeholder="Detalhes da tarefa"
          placeholderTextColor={COLORS.GRAY_SECONDARY}
        />
      </View>

      <View style={styles.inline}>
        <View style={styles.switch}>
          <Switch
            onValueChange={() => setDone(!done)}
            value={done}
            thumbColor={done ? COLORS.PINK : COLORS.WHITE}
            trackColor={{ false: COLORS.GRAY_TERTIARY, true: COLORS.GRAY_TERTIARY }}
          />
          <Text style={styles.switchLabel}>Concluído</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}