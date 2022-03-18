import { Text, View } from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo.svg";
// Temos que instalar o react-native-svg para usarmos svg e o svg transformer
// https://github.com/kristerkari/react-native-svg-transformer
// Criar o arquivo metro.config.js e configurar de acordo com a documentação

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Voltar</Text>
      <Logo />
      <Text style={styles.text}>Notificações</Text>
    </View>
  )
}