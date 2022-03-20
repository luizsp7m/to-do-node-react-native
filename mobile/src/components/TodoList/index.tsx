import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Task } from "../../screens/Home";
import { COLORS } from "../../theme";
import { Todo } from "../Todo";

import { styles } from "./styles";

interface TodoListProps {
  tasks: Task[];
  loading: boolean;
  filter: string;
  onNavigateToTaskId: (task: Task) => void;
}

export function TodoList({ tasks, loading, filter, onNavigateToTaskId }: TodoListProps) {
  return (
    <>
      <Text style={styles.title}>{filter === "late" ? "Tarefas atrasadas" : "Tarefas"}</Text>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {loading ? (
          <ActivityIndicator
            color={COLORS.PINK}
            size={30}
          />
        ) : (
          tasks.map(task => (
            <Todo
              key={task._id}
              task={task}
              onNavigateToTaskId={onNavigateToTaskId}
            />
          ))
        )}

      </ScrollView>
    </>
  );
}