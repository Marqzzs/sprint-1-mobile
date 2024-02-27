import { useState } from "react";
import { Container, ScrollContainer } from "../../components/Container/Style";
import { ListComponent } from "../../components/List/List";
import { Title } from "../../components/Title/Style";
import { ClinicCard } from "../../components/ClinicCard/ClinicCard";
import { TitleSelection } from "./Style";
import {
  Button,
  ButtonSecundaryTitle,
  ButtonTitle,
} from "../../components/Button/Style";

const Clinicas = [
  { id: 1, nome: "Clinic Nature" },
  { id: 2, nome: "Clinic of Woman" },
  { id: 3, nome: "Carlos" },
  { id: 4, nome: "Carlos" },
  { id: 5, nome: "Carlos" },
  { id: 6, nome: "Carlos" },
];

export const SelectClinic = () => {
  const [statusLista, setStatusLista] = useState(""); // Inicialmente vazio

  const handleClinicSelection = (nome) => {
    setStatusLista(nome); // Atualiza o estado com o nome da clínica selecionada
  };

  return (
    <Container>
      <TitleSelection>Select Clinic</TitleSelection>

      <ListComponent
        data={Clinicas}
        keyExtractor={(item) => item.id.toString()} // Corrigindo a propriedade keyExtractor
        renderItem={({ item }) => <ClinicCard nome={item.nome} />}
      />
      <Button>
        <ButtonTitle>Continue</ButtonTitle>
      </Button>
      <ButtonSecundaryTitle>Cancel</ButtonSecundaryTitle>
    </Container>
  );
};
