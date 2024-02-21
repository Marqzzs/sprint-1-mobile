import { useState } from "react";
import { AbsListAppontment } from "../../components/AbsListAppointment/AbsListAppointment";
import CalendarHome from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { Header } from "../../components/Header/Header";
import { FilterAppointment } from "./Style";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "pendente" },
  { id: 2, nome: "Carlos", situacao: "realizada" },
  { id: 3, nome: "Carlos", situacao: "pendente" },
  { id: 4, nome: "Carlos", situacao: "realizada" },
  { id: 5, nome: "Carlos", situacao: "cancelada" },
  { id: 6, nome: "Carlos", situacao: "cancelada" },
];

export const Home = () => {
  const [statusLista, setStatusLista] = useState("pendente");

  return (
    <Container>
      {/* Header */}
      <Header />
      {/* Calendario */}
      <CalendarHome />
      {/* Buttons(Filtros) */}
      <FilterAppointment>
        <AbsListAppontment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />
        <AbsListAppontment
          textButton={"Realizadas"}
          clickButton={statusLista === "realizada"}
          onPress={() => setStatusLista("realizada")}
        />
        <AbsListAppontment
          textButton={"Canceladas"}
          clickButton={statusLista === "cancelada"}
          onPress={() => setStatusLista("cancelada")}
        />
      </FilterAppointment>
      {/* Cards */}
      <ListComponent
        data={Consultas}
        key={(item) => item.id}
        renderItem={({ item }) =>
          statusLista == item.situacao && (
            <AppointmentCard situacao={item.situacao} />
          )
        }
      />
    </Container>
  );
};
