import { BoxImput } from "../../components/BoxImput";
import { ScrollForm, ContainerForm } from "./style";

export function Home() {
  // hooks - state
  // hooks - effect
  // chamada da API
  return (
    // ScroolForm
    // ContainerForm
    // BoxImput
    // label
    // imput
    <ScrollForm>
      <ContainerForm>
        <BoxImput
          textLabel="informe o Cep:"
          placeholder={"Cep..."}
          KeyType="numeric"
          maxLength={9}
        />

        <BoxImput
          textLabel="Logradouro:"
          placeholder={"Logradouro..."}
        />

        <BoxImput
          textLabel="Bairro:"
          placeholder={"Bairro..."}
        />

        <BoxImput
          textLabel="Cidade:"
          placeholder={"Cidade..."}
        />
      </ContainerForm>
    </ScrollForm>
  );
}
