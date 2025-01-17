import React, { useState } from "react";
import { Container, IconContainer, InputField, Label } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../themes/colors";

interface IInputTextProps {
  value?: string;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
}

const InputText = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}: IInputTextProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputField
        isFocused={isFocused}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !showPassword}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        value={value}
      />
      {secureTextEntry && (
        <IconContainer onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color={colors.gray}
          />
        </IconContainer>
      )}
    </Container>
  );
};

export default InputText;
