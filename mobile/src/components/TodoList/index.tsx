import { ScrollView, View } from "react-native";
import { Todo } from "../Todo";

import { styles } from "./styles";

export function TodoList() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </ScrollView>
  );
}