import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";
import { RecoverPassword } from "./src/screens/RecoverPassword/RecoverPassword";
import { ResetPassword } from "./src/screens/ResetPassword/ResetPassword";

//StackNavigator instance
const Stack = createNativeStackNavigator();

//Import from sources
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";

import { Quicksand_500Medium } from "@expo-google-fonts/quicksand";
import { CheckEmail } from "./src/screens/CheckEmail/CheckEmail";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    // Navigation

    // Container
    //StackNavigator
    //StackScreen

    //involves the structure of navigation
    <NavigationContainer>
      {/* Navigation component */}
      <Stack.Navigator>
        <Stack.Screen
          //Screen name
          name="Navigation"
          //component that will be called
          component={Navigation}
          //screen title
          options={{ title: "Navigation" }}
        />
        <Stack.Screen
          //Screen name
          name="Login"
          //component that will be called
          component={Login}
          //screen title
          options={{ title: "Login" }}
        />
        <Stack.Screen
          //Screen name
          name="RecoverPassword"
          //component that will be called
          component={RecoverPassword}
          //screen title
          options={{ title: "RecoverPassword" }}
        />
        <Stack.Screen
          //Screen name
          name="CheckEmail"
          //component that will be called
          component={CheckEmail}
          //screen title
          options={{ title: "CheckEmail" }}
        />
        <Stack.Screen
          //Screen name
          name="ResetPassword"
          //component that will be called
          component={ResetPassword}
          //screen title
          options={{ title: "ResetPassword" }}
        />
        <Stack.Screen
          //Screen name
          name="CreateAccount"
          //component that will be called
          component={CreateAccount}
          //screen title
          options={{ title: "CreateAccount" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
