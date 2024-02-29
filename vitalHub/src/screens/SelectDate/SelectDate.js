import { useState } from "react";
import { Container } from "../../components/Container/Style";
import { TitleSelection } from "../SelectClinic/Style";
import { FullCalendar } from "../../components/FullCalendar/FullCalendar";

export const SelectDate = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  return (
    <Container>
      <TitleSelection>Select Date</TitleSelection>

      <FullCalendar selectedDate={selectedDate} handleSelectedDateFn={setSelectedDate}/>
    </Container>
  );
};
