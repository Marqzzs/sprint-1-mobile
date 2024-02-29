import SelectDropdown from "react-native-select-dropdown";
import { ContentProfile, TextProfileInput } from "../../screens/Profile/Style";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { SelectInputView } from "./Style";

export const SelectInput = ({
  defaultText = "",
  handleSelectedFn = null,
  labelText = "",
}) => {
  return (
    <SelectInputView>
      <ContentProfile>
        <TextProfileInput>Select an available time</TextProfileInput>
        <SelectDropdown
          data={["A", "B", "C", "D"]}
          defaultButtonText={defaultText}
          onSelect={(selectedItem, index) => {
            handleSelectedFn(index);
          }}
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
          renderDropdownIcon={() => (
            <AntDesign name="caretdown" size={24} color="#34898F" />
          )}
          dropdownStyle={styles.dropdown} // Define o estilo do dropdown
        />
      </ContentProfile>
    </SelectInputView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    borderRadius: 8,
    borderColor: "#60BFC5",
    borderWidth: 2,
    width: "100%",
    height: 54,
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonText: {
    color: "#34898F",
    fontSize: 16,
    fontFamily: "MontserratAlternates_600SemiBold",
    textAlign: "left",
  },
  // dropdown: {
  //   marginTop: -38,
  //   borderCurve: 5,
  // },
});