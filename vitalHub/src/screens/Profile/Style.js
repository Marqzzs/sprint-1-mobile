import styled from "styled-components";
import { Input } from "../../components/Input/Style";

export const ProfilePicture = styled.Image`
  width: 100%;
  height: 280px;
`;

export const ContentName = styled.View`
  width: 289px;
  height: 100px;
  border-radius: 5px;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: -50px;
  margin-bottom: 30px;
`;

export const TextProfileName = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #33303e;
`;

export const TextProfileEmail = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_500Medium";
  color: #4e4b59;
`;

export const ContentProfile = styled.View`
  width: 320px;
  height: 83px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const TextProfileInput = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_600SemiBold";
  color: #000000;
`;

export const InputProfile = styled(Input)`
  color: #33303e;
  font-size: 14px;
  font-family: "MontserratAlternates_500Medium";
  border: none;
  background-color: #f5f3f3;
`;

export const ContentRow = styled.View`
width: 80%;
flex-direction: row;
margin-bottom: 30px;
justify-content: space-between;
`;

export const ContentProfileRow = styled.View`
gap: 6px;
`;
export const InputRow = styled.TextInput.attrs({
  placeholderTextColor: "#49B3BA",
})`
  width: 144px;
  height: 53px;
  padding: 16px;

  /* border: 2px solid #49b3ba; */
  border-radius: 5px;
  color: #33303e;
  background-color: #f5f3f3;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
`;
