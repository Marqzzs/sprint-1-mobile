//componente Person

import {View, Text,StyleSheet } from "react-native"
//props: name, age
const Person = ({name, age}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {name}</Text>
            <Text style={styles.text}>Age: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        padding: 10,
        margin: 10,
        borderRadius: 8,
    },
    text: {
        color: "green"
    }
})

export default Person;