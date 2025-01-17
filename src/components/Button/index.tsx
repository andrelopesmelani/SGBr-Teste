import { ActivityIndicator } from "react-native";
import { ButtonText, ButtonContainer } from "./styles";
import { colors } from "../../themes/colors";

interface IButtonProps {
    title: string;
    loading?: boolean;
    onPress: () => void;
}

const Button = ({ title, loading, onPress }: IButtonProps) => {
    return (
        <ButtonContainer onPress={onPress}>
            {loading ? <ActivityIndicator size={24} color={colors.white} /> : <ButtonText>{title}</ButtonText>}
        </ButtonContainer>
    )
}

export default Button