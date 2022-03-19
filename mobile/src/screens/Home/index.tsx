import { useEffect, useState } from "react";
import { View } from "react-native";

import { Filter } from "../../components/Filter";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TodoList } from "../../components/TodoList";
import { api } from "../../services/api";

import { styles } from "./styles";

export interface Task {
  _id: string;
  macaddress: string;
  type: number;
  title: string;
  description: string;
  when: string;
  done: boolean;
}

export function Home() {
  const [filter, setFilter] = useState("today");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [lateCount, setLateCount] = useState(0);
  const [loading, setLoading] = useState(true);

  function onChangeFilter(slug: string) {
    setFilter(slug);
  }

  async function getTasks() {
    setLoading(true);
    const response = await api.get(`/task/filter/${filter}/00:00:5e:00:53:af`);

    setTimeout(() => {
      setLoading(false);
      setTasks(response.data);
    }, 1000);
  }

  async function getLateTasks() {
    const response = await api.get(`/task/filter/late/00:00:5e:00:53:af`);
    setLateCount(response.data.length);
  }

  useEffect(() => {
    getTasks();
    getLateTasks();
  }, [filter]);

  return (
    <View style={styles.container}>
      <Header showQrCode={true} showNotification={true} onChangeFilter={onChangeFilter} lateCount={lateCount} />
      <Filter filter={filter} onChangeFilter={onChangeFilter} />
      <TodoList tasks={tasks} loading={loading} filter={filter} />
      <Footer icon="add" />
    </View>
  );
}