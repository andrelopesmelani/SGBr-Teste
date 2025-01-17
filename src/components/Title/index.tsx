import { colors } from "../../themes/colors";
import { TitleContainer, TitleText, Subtitle } from "./styles";

interface ITitleProps {
    title: string;
    subtitle?: string;
    color?: string;
    subtitleColor?: string;
    size?: 'sx' | 'md' | 'lg'
}

const Title = ({ title, subtitle, color= colors.primary, size= 'md', subtitleColor }: ITitleProps) => {

    return (
        <TitleContainer>
            <TitleText style={{color: color}} size={size}>{title}</TitleText>
            <Subtitle subtitleColor={subtitleColor}>{subtitle}</Subtitle>
        </TitleContainer>
    )
}

export default Title