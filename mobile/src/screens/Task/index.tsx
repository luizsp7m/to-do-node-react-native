import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Task() {
  return (
    <View style={styles.container}>
      <Header showQrCode={false} showNotification={false} lateCount={0} onChangeFilter={() => {}} />
      <Form />
      <Footer icon="confirm" />
    </View>
  );
}