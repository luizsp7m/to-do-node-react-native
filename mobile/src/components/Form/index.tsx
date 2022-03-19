import { useState } from "react";
import { Button, Image, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS } from "../../theme";
import { Categories } from "../Categories";

import IconCalendar from "../../assets/calendar.png";
import IconClock from "../../assets/clock.png";

import { styles } from "./styles";
import { format } from "date-fns";

export function Form() {
  const [done, setDone] = useState(false);

  // Datapicker
  const [mode, setMode] = useState("date");
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  function showMode(currentMode: string) {
    setShowPicker(true);
    setMode(currentMode);
  }

  function onChangePicker(event: any, selectedDate: any) {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
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
    </ScrollView>
  );
}