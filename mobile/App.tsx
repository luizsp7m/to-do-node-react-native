import { Home } from "./src/screens/Home";
import { Task } from "./src/screens/Task";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import {
  useFonts, // usado para carregar as fontes
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";


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
      {/* <Home /> */}
      <Task />
      <StatusBar style="light" />
    </>
  );
}