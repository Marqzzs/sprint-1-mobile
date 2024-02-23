import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";
import { RecoverPassword } from "./src/screens/RecoverPassword/RecoverPassword";
import { ResetPassword } from "./src/screens/ResetPassword/ResetPassword";
import {MedicalRecords} from "./src/screens/MedicalRecords/MedicalRecords"

// Import library moment
import moment from "moment";

// import calendar strip
import { CalendarHome } from "./src/components/CalendarHome/CalendarHome";

//StackNavigator instance
const Stack = createNativeStackNavigator();

//Import from sources
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";

import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_400Regular
} from "@expo-google-fonts/quicksand";
import { CheckEmail } from "./src/screens/CheckEmail/CheckEmail";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { Profile } from "./src/screens/Profile/Profile";
import { Home } from "./src/screens/Home/Home";

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
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
          options={{ title: "Navigation", headerShown: false }}
        />
        <Stack.Screen
          //Screen name
          name="Login"
          //component that will be called
          component={Login}
          //screen title
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          //Screen name
          name="RecoverPassword"
          //component that will be called
          component={RecoverPassword}
          //screen title
          options={{ title: "RecoverPassword", headerShown: false }}
        />
        <Stack.Screen
          //Screen name
          name="CheckEmail"
          //component that will be called
          component={CheckEmail}
          //screen title
          options={{ title: "CheckEmail", headerShown: false }}
        />
        <Stack.Screen
          //Screen name
          name="ResetPassword"
          //component that will be called
          component={ResetPassword}
          //screen title
          options={{ title: "ResetPassword", headerShown: false }}
        />
        <Stack.Screen
          //Screen name
          name="CreateAccount"
          //component that will be called
          component={CreateAccount}
          //screen title
          options={{ title: "CreateAccount", headerShown: false }}
        />
        <Stack.Screen
          //Screen name
          name="Profile"
          //component that will be called
          component={Profile}
          //screen title
          options={{ title: "Profile", headerShown: false }}
        />
        <Stack.Screen
          //Screen name
          name="Home"
          //component that will be called
          component={Home}
          //screen title
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          //Screen name
          name="MedicalRecords"
          //component that will be called
          component={MedicalRecords}
          //screen title
          options={{ title: "MedicalRecords", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
