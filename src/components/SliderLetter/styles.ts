import styled from "styled-components/native";
import { colors } from "../../themes/colors";

export const AlphabetContainer = styled.View`
  position: absolute;
  right: 10px;
  top: 24%;
  height: 81%;
  width: 30px;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.grayOpacity};
  border-radius: 10px;
  padding-vertical: 5px;
`;

export const AlphabetText = styled.Text<{ isSelected: boolean }>`
  font-size: 12px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? colors.primary : "#000")};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;

export const LetterIndicator = styled.View`
  position: absolute;
  left: -60px;
  top: 40%;
  width: 50px;
  height: 50px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  opacity: 0.8;
`;

export const IndicatorText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;