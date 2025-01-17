import styled from 'styled-components/native';
import { colors } from '../../themes/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 15px;
`;

export const SectionHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const CarItem = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${colors.white};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const CarName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.dark};
`;


export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;