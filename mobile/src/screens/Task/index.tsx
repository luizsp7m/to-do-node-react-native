import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { styles } from "./styles";

interface TaskProps {
  navigation: any
}

export function Task({ navigation }: TaskProps) {
  function navigateToHome() {
    navigation.navigate("Home");
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

      <Form navigateToHome={navigateToHome} />

      {/* <Footer icon="confirm" /> */}
    </View>
  );
}