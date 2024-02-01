import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  // Estado para armazenar o contador
  const [count, setCount] = useState(0);
  
  // Função de incremento do contador
  const increment = () => {
    setCount(count + 1);
  }
  
  // Função de decremento do contador
  const decrement = () => {
    setCount(count - 1);
  }

  // Efeito para monitorar mudanças no contador
  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`); // Log no console com o contador atualizado
  }, [count]); // O efeito será executado sempre que o valor de 'count' mudar

  return (
    <View style={styles.container}>
      {/* Texto exibindo o valor do contador */}
      <Text style={styles.counterText}>Counter: {count}</Text>

      {/* Botão para incrementar o contador */}
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>Add</Text> 
      </TouchableOpacity>
      
      {/* Botão para decrementar o contador */}
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>Subtract</Text> 
      </TouchableOpacity>

      {/* Barra de status do Expo */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Cor de fundo do container
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 24, // Tamanho do texto do contador
    marginBottom: 20, // Espaçamento inferior
  },
  button: {
    backgroundColor: "#4CAF50", // Cor de fundo do botão
    paddingVertical: 10, // Espaçamento vertical interno
    paddingHorizontal: 20, // Espaçamento horizontal interno
    borderRadius: 8, // Bordas arredondadas
    marginBottom: 10, // Espaçamento inferior
  },
  buttonText: {
    color: "#fff", // Cor do texto do botão
    fontSize: 18, // Tamanho do texto do botão
    fontWeight: "bold", // Peso da fonte
  },
});
