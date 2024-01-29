//componente Person
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
//props: name, age
const Person = ({ name, age }) => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    color: "green",
    fontFamily: 'Poppins_400Regular'
  },
});

export default Person;
