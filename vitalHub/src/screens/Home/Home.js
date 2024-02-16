import CalendarHome from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { Header } from "../../components/Header/Header";

export const Home = () => {
  return (
    <Container>
      {/* Header */}
      <Header />
      {/* Calendario */}
      <CalendarHome />
      {/* Buttons(Filtros) */}
      <FilterButtons />
      {/* Cards */}
    </Container>
  );
};
