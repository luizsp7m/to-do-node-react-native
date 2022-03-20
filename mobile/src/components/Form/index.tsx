import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Categories } from "../Categories";
import { COLORS } from "../../theme";

import DeviceInfo from "react-native-device-info";
import DateTimePicker from "@react-native-community/datetimepicker";
import IconCalendar from "../../assets/calendar.png";
import IconClock from "../../assets/clock.png";

import { styles } from "./styles";
import { format } from "date-fns";
import { api } from "../../services/api";

interface FormProps {
  navigateToHome: () => void;
}

export function Form({ navigateToHome }: FormProps) {
  const [done, setDone] = useState(false);

  // Datapicker
  const [mode, setMode] = useState<any>("date");
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  // Form
  const [macaddress, setMacaddress] = useState();
  const [type, setType] = useState<number | undefined>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onChangeType(typeNumber: number) {
    setType(typeNumber);
  }

  function showMode(currentMode: string) {
    setShowPicker(true);
    setMode(currentMode);
  }

  function onChangePicker(event: any, selectedDate: any) {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  }

  async function createTask() {
    if (!type) return alert("Defina o tipo da tarefa");
    if (!title) return alert("Defina o título da tarefa");
    if (!description) return alert("Defina a descrição da tarefa");
    if (!date) return alert("Defina a data da tarefa");

    const task = {
      macaddress: "00:00:5e:00:53:af",
      type,
      title,
      description,
      when: date,
    }

    await api.post("/task", task).then(response => {
      navigateToHome();
    }).catch(error => {
      console.log(error.message);
    });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Categories
        type={type}
        onChangeType={onChangeType}
      />

      <View style={styles.group}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          maxLength={30}
          placeholder="Nome da tarefa"
          placeholderTextColor={COLORS.GRAY_SECONDARY}
          value={title}
          onChangeText={text => setTitle(text)}
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
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Data</Text>
        <View style={styles.inputDate}>
          <TouchableOpacity style={styles.buttonIcon} onPress={() => showMode("date")}>
            <Image
              source={IconCalendar}
              style={styles.imageIcon}
            />
          </TouchableOpacity>

          <Text style={styles.dateText}>{format(new Date(date), "dd/MM/yyyy")}</Text>
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Hora</Text>
        <View style={styles.inputDate}>
          <TouchableOpacity style={styles.buttonIcon} onPress={() => showMode("time")}>
            <Image
              source={IconClock}
              style={styles.imageIcon}
            />
          </TouchableOpacity>

          <Text style={styles.dateText}>{format(new Date(date), "HH:mm")}</Text>
        </View>
      </View>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangePicker}
        />
      )}

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

      <TouchableOpacity style={styles.buttonSubmit} activeOpacity={0.75} onPress={() => createTask()}>
        <Text style={styles.textSubmit}>Adicionar tarefa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}