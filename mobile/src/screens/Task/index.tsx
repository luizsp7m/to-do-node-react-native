import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { styles } from "./styles";

interface TaskProps {
  navigation: any;
  route: any;
}

export function Task({ route, navigation }: TaskProps) {
  function navigateToHome() {
    navigation.push("Home");
  }

  let task = undefined;

  if(route.params) {
    task = route.params.task;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Header
        showQrCode={false}
        showNotification={false}
        lateCount={0}
        onChangeFilter={() => { }}
        navigateToHome={navigateToHome}
      />

      <Form navigateToHome={navigateToHome} task={task} />

      {/* <Footer icon="confirm" /> */}
    </View>
  );
}