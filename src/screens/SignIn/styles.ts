import styled from 'styled-components/native';
import { colors } from '../../themes/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${colors.primary};
`;

export const TitleContainer = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding: 100px 20px 0px 20px;
`

export const FormContainer = styled.View`
    width: 100%;
    flex: 3;
    background-color: ${colors.white};
    padding: 50px 30px 0 30px;
    border-radius: 30px 30px 0px 0px;
    gap: 40px;
    `

export const ErrorText = styled.Text`
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
`;
