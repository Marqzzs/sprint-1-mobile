import { useState } from "react";
import { Container } from "../../components/Container/Style";
import { TitleSelection } from "../SelectClinic/Style";
import { FullCalendar } from "../../components/FullCalendar/FullCalendar";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { Button, ButtonSecundaryTitle, ButtonTitle } from "../../components/Button/Style";

export const SelectDate = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  return (
    <Container>
      <TitleSelection>Select Date</TitleSelection>

      <FullCalendar
        selectedDate={selectedDate}
        handleSelectedDateFn={setSelectedDate}
      />

      <SelectInput
        labelText="Select an available time slot"
        defaultText="Select a time"
        handleSelectedFn={setSelectedTime}
      />

      <Button>
        <ButtonTitle>Comfirm</ButtonTitle>
      </Button>
      <ButtonSecundaryTitle>Cancel</ButtonSecundaryTitle>

    </Container>
  );
};
