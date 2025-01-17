import styled from 'styled-components/native';
import { colors } from '../../themes/colors';

export const TitleContainer = styled.View`
    width: 100%;
`

export const TitleText = styled.Text<{size: string}>`
  font-size:${({ size }: string) => (size == 'md' ? '32px' : size == 'sx' ? '28px' : '38px')};
  color: ${colors.white};
  font-weight: 500;
`;

export const Subtitle = styled.Text<{subtitleColor: string}>`
  font-size: 14px;
  color: ${({ subtitleColor }: string) => (subtitleColor ? subtitleColor : colors.gray100)};;
`;
