import styled from "styled-components/native";
import { colors } from "../../themes/colors";


export const Label = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
  margin-bottom: 5px;
`;

export const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const InputField = styled.TextInput<{ isFocused: boolean }>`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
  position: relative;
  border-color:${({ isFocused }) => (isFocused ? colors.primary : colors.gray)};
  border-width: ${({ isFocused }) => (isFocused ? '1px' : '1px')};
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 42px;
  right: 15px;
  justify-content: center;
  align-items: center;
`;