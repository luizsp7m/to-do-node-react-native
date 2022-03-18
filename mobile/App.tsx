import { Home } from "./src/screens/Home";

import {
  useFonts, // usado para carregar as fontes
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) { // se as fontes não forem carregadas, esperar na tela de splash
    return <AppLoading />
  }

  return (
    <>
      <Home />
      <StatusBar style="light" />
    </>
  );
}