import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import IconQrCode from "../../assets/qr-code.png";
import IconLeftArrow from "../../assets/arrow.png";
import IconNotification from "../../assets/bell.png";
import Logo from "../../assets/logo.svg";
// Temos que instalar o react-native-svg para usarmos svg e o svg transformer
// https://github.com/kristerkari/react-native-svg-transformer
// Criar o arquivo metro.config.js e configurar de acordo com a documentação

interface HeaderProps {
  showQrCode: boolean;
  showNotification: boolean;
  onChangeFilter: (slug: string) => void;
  lateCount: number;
  navigateToHome?: () => void;
}

export function Header({
  showQrCode,
  showNotification,
  onChangeFilter,
  lateCount,
  navigateToHome,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {showQrCode ? (
        <TouchableOpacity>
          <Image
            source={IconQrCode}
            style={styles.qrcode}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigateToHome && navigateToHome()}>
          <Image
            source={IconLeftArrow}
            style={styles.arrow}
          />
        </TouchableOpacity>
      )}

      <Text style={styles.logo}>To do List</Text>

      {showNotification && (
        <TouchableOpacity style={styles.notification} onPress={() => onChangeFilter("late")}>
          <Image
            source={IconNotification}
            style={styles.bell}
          />

          {lateCount > 0 && <Text style={styles.notifications}>{lateCount}</Text>}
        </TouchableOpacity>
      )}
    </View>
  )
}