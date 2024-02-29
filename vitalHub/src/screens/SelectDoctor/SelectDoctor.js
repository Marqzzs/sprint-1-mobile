import { TouchableOpacity } from "react-native";
import {
  Button,
  ButtonSecundaryTitle,
  ButtonTitle,
} from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { DoctorsCard } from "../../components/DoctorsCard/DoctorsCard";
import { ListComponent } from "../../components/List/List";
import { TitleSelection } from "../SelectClinic/Style";

const Doctors = [
  {
    id: 1,
    nome: "Dr. Hans Chucrute",
    especialidade: "Cirurgiao Plastico",
    image:
      "https://images.tcdn.com.br/img/img_prod/1050053/dr_hans_chucrutes_19_1_6c8e017aaca4306cfc68b17052ba77cd.jpg",
  },
  {
    id: 2,
    nome: "Dr. Sujiro Kimimame",
    especialidade: "Urologista",
    image:
      "https://conteudo.imguol.com.br/c/entretenimento/b3/2020/01/29/o-ator-will-yun-lee-em-the-good-doctor-1580334209345_v2_1x1.jpg",
  },
  {
    id: 3,
    nome: "Dra. Paula Tejano",
    especialidade: "Clinico Geral",
    image:
      "https://www.iedamillas.com.br/images/2020/09/13/dra-ieda-millas-2020-00b.jpg",
  },
];

export const SelectDoctor = () => {
  return (
    <Container>
      <TitleSelection>Select Doctor</TitleSelection>

      <ListComponent
        data={Doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <DoctorsCard
              nome={item.nome}
              especialidade={item.especialidade} // Passando a especialidade
              image={item.image} // Passando a imagem
            />
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
