import { useState } from "react";
import { AbsListAppontment } from "../../components/AbsListAppointment/AbsListAppointment";
import CalendarHome from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { FilterAppointment } from "./Style";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import CancellationModal from "../../components/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";

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
  // states para os modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);

  return (
    <Container>
      {/* Header */}
      <Header />
      {/* Calendario */}
      <CalendarHome />
      {/* Buttons(Filtros) */}
      <FilterAppointment>
        <AbsListAppontment
          textButton={"Scheduled"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />
        <AbsListAppontment
          textButton={"Realized"}
          clickButton={statusLista === "realizada"}
          onPress={() => setStatusLista("realizada")}
        />
        <AbsListAppontment
          textButton={"Canceled"}
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
            <AppointmentCard
              situacao={item.situacao}
              onPressAppointment={() => setShowModalAppointment(true)}
              onPressCancel={() => setShowModalCancel(true)}
            />
          )
        }
      />
      <CancellationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />
      <AppointmentModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />
    </Container>
  );
};
