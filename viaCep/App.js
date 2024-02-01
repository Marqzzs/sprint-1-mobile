import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Header } from "./scr/components/Header";
import { ContainerApp } from "./styles";
import { Home } from "./scr/screens/Home";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded && fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar />
      <Header />
      <Home />
    </ContainerApp>
  );
}
