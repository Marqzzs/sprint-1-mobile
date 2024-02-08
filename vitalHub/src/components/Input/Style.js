import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#49B3BA",
})`
  width: 90%;
  height: 53px;
  padding: 16px;
  margin-top: 15px;

  border: 2px solid #49b3ba;
  border-radius: 5px;
  color: #34898f;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
`;

export const RecoverInput = styled(Input)`
margin-bottom: 30px;
`
