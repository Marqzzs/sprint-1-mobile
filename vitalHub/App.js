import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";
import { RecoverPassword } from "./src/screens/RecoverPassword/RecoverPassword";
import { ResetPassword } from "./src/screens/ResetPassword/ResetPassword";

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
} from "@expo-google-fonts/quicksand";
import { CheckEmail } from "./src/screens/CheckEmail/CheckEmail";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { Profile } from "./src/screens/Profile/Profile";
import { Home } from "./src/screens/Home/Home";

export default function App() {
  // const CalendarList = () => {
  //   moment.updateLocale("pt-br", {
  //     //months
  //     months:
  //       "January_February_March_April_May_June_July_August_September_October_November_December".split(
  //         "_"
  //       ),

  //     //abreviate months
  //     monthsShort: "jan_feb_mar_apr_may_jun_jul_aug_sep_oct_nov_dec".split("_"),

  //     //days of week
  //     weekdays:
  //       "sunday_monday_tuesday_wednesday_thursday_friday_saturday".split("_"),

  //     //abreviate days
  //     weekdaysShort: "sun_mon_tue_wed_thu_fri_sat".split("_"),

  //     weekdaysMin: "sun_2ª_3ª_4ª_5ª_6ª_sat".split("_"),
  //   });
  // };

  // //current snapshote date

  // const currentDate = new Date();

  // //set the start date to the first day of the month
  // const startingDate = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth(),
  //   1
  // );

  // //set the end date to the last day of the month
  // const endingDate = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth() + 1,
  //   0
  // );

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
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
        <Stack.Screen
          //Screen name
          name="Profile"
          //component that will be called
          component={Profile}
          //screen title
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          //Screen name
          name="Home"
          //component that will be called
          component={Home}
          //screen title
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
