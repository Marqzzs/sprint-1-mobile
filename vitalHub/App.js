import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//StackNavigator instance
const Stack = createNativeStackNavigator();

export default function App() {
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
          name='Navigation'
          //component that will be called
          component={Navigation}
          //screen title
          options={{title: 'Navigation'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
