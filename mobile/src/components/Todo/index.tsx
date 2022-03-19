import { Image, Text, View } from "react-native";
import { Task } from "../../screens/Home";
import { Icons } from "../../utils/icons";

import { format } from "date-fns";

import { styles } from "./styles";

interface TodoProps {
  task: Task;
}

export function Todo({ task }: TodoProps) {
  const dateFormatted = format(new Date(task.when), "dd/MM/yyyy");
  const hourFormatted = format(new Date(task.when), "HH:mm");

  return (
    <View style={[styles.container, task.done && styles.done]}> 
      <View style={styles.type}>
        <Image
          source={Icons[task.type]}
          style={styles.typeImage}
        />
        <Text style={styles.typeText}>{task.title}</Text>
      </View>

      <View style={styles.when}>
        <Text style={styles.date}>{ dateFormatted }</Text>
        <Text style={styles.hour}>{ hourFormatted }</Text>
      </View>
    </View>
  );
}