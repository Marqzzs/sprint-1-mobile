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
import { TouchableOpacity } from "react-native";

const Clinicas = [
  { id: 1, name: "Clinic Nature", address: "Jerumenha - PI" },
  { id: 2, name: "Clinic of Woman", address: "Januaria - MG" },
  { id: 3, name: "Hospital São Lucas", address: "Lagoinha - MT" },
  { id: 4, name: "Centro Médico Vitalidade", address: "Rio Branco - AC" },
  { id: 5, name: "Clínica Saúde e Vida", address: "Seabra - BA" },
  { id: 6, name: "Clínica Integrada Harmonia", address: "Se - SP" },
];

export const SelectClinic = () => {
  const [statusLista, setStatusLista] = useState(""); // Inicialmente vazio

  const handleClinicSelection = (name) => {
    setStatusLista(name); // Atualiza o estado com o name da clínica selecionada
  };

  return (
    <Container>
      <TitleSelection>Select Clinic</TitleSelection>

      <ListComponent
        data={Clinicas}
        keyExtractor={(item) => item.id.toString()} // Corrigindo a propriedade keyExtractor
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ClinicCard name={item.name} address={item.address}/>
          </TouchableOpacity>
        )}
      />
      <Button>
        <ButtonTitle>Continue</ButtonTitle>
      </Button>
      <ButtonSecundaryTitle>Cancel</ButtonSecundaryTitle>
    </Container>
  );
};
