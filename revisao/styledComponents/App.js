import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Container } from "./src/components/Container/Container";
import { Button, RedButton } from "./src/components/Button/Button";
import { Title } from "./src/components/Title/Title";
import { TextButton } from "./src/components/TextButton/TextButton";
import { ImageComponent } from "./src/components/Image/Image";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular
  });

  if(!fontsLoaded && fontError){
    return null;
  };

  // Estado para armazenar o contador
  const [count, setCount] = useState(0);

  // Função de incremento do contador
  const increment = () => {
    setCount(count + 1);
  };

  // Função de decremento do contador
  const decrement = () => {
    setCount(count - 1);
  };

  // Efeito para monitorar mudanças no contador
  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`); // Log no console com o contador atualizado
  }, [count]); // O efeito será executado sempre que o valor de 'count' mudar

  return (
    <Container>
      <ImageComponent source={{ uri: "https://cdn.lojavirtuolpro.com/pokestoprodutos/produto/20180504122303_5282994718_D.jpg" }}></ImageComponent>
      {/* Texto exibindo o valor do contador */}
      <Title>Counter: {count}</Title>

      {/* Botão para incrementar o contador */}
      <Button onPress={increment}>
      <TextButton>Add</TextButton>
      </Button>

      {/* Botão para decrementar o contador */}
      <RedButton onPress={decrement}>
        <TextButton>Subtract</TextButton>
      </RedButton>

      {/* Barra de status do Expo */}
      <StatusBar style="auto" />
    </Container>
  );
}