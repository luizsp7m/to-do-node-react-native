import { Home } from "./src/screens/Home";
import { Task } from "./src/screens/Task";
import { StatusBar } from "expo-status-bar";

import AppLoading from "expo-app-loading";

import {
  useFonts, // usado para carregar as fontes
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "./src/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) { // se as fontes não forem carregadas, esperar na tela de splash
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.PINK,
          },
          headerTintColor: COLORS.WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Início" }}
        />

        <Stack.Screen
          name="Task"
          component={Task}
          options={{ title: "Tarefa" }}
        />

        {/* <StatusBar style="light" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}