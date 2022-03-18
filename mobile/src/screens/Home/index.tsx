import { View } from "react-native";

import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { TodoList } from "../../components/TodoList";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Filter />
      <TodoList />
    </View>
  );
}