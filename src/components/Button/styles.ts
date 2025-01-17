import styled from "styled-components/native";
import { colors } from "../../themes/colors";

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: ${colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  elevation: 3;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
`;