import React from "react";
import { View } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment"; // Certifique-se de instalar moment no seu projeto
import styled from "styled-components/native";

// Estilizando o componente CalendarStrip com styled-components
const StyledCalendarStrip = styled(CalendarStrip)`
  height: 100px;
  width: 100%;
`;

const CalendarHome = () => {
  // Atualizando a localização para português brasileiro
  moment.updateLocale("pt-br", {
    months:
      "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
        "_"
      ),
    weekdays: "Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado".split("_"),
    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
    weekdaysMin: "D_S_T_Q_Q_S_S".split("_"),
  });

  // Obtendo datas de início e fim do mês atual
  const currentDate = moment();
  const startingDate = currentDate.startOf("month");
  const endingDate = currentDate.endOf("month");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StyledCalendarStrip
        calendarAnimation={{ type: "sequence", duration: 30 }}
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 2,
          borderHighlightColor: "#49B3BA",
        }}
        iconLeftStyle={{ display: "none" }}
        iconRightStyle={{ display: "none" }}
        selectedDate={currentDate.toDate()}
        startingDate={startingDate.toDate()}
        minDate={startingDate.toDate()}
        maxDate={endingDate.toDate()}
        calendarHeaderStyle={{
          fontSize: 22,
          textAlign: "center",
          alignSelf: "flex-start",
          color: "#4E4B59",
          fontFamily: "MontserratAlternates_600SemiBold",
          paddingHorizontal: 16,
        }}
        dateNumberStyle={{ color: "#5F5C6B", fontSize: 16 }}
        dateNameStyle={{
          color: "#ACABB7",
          fontSize: 12,
          textTransform: "capitalize",
        }}
        highlightDateNameStyle={{
          color: "white",
          fontSize: 12,
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
        highlightDateNumberStyle={{ color: "white", fontSize: 16 }}
        highlightDateContainerStyle={{ backgroundColor: "#60BFC5" }}
        iconContainer={{ flex: 0.01 }}
        scrollable={true}
      />
    </View>
  );
};

export default CalendarHome;
