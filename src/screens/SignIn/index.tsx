import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Container, ErrorText, FormContainer, TitleContainer } from './styles';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import Title from '../../components/Title';
import { colors } from '../../themes/colors';
import axios from 'axios';
import { useAuth } from '../../context/authentication';

interface FormData {
  user: string;
  password: string;
}


const SignIn = () => {
  const {
    handleSubmit,
    setValue,
  } = useForm<FormData>();
  const { login } = useAuth();

  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setErrorMessage('')

    await axios.post('https://test-api-y04b.onrender.com/signIn', data)
      .then((response) => {
        const userInfo = response.data.user;
        const userToken = response.data.user.token;
        login(userToken, userInfo);
      })
      .catch(error => {
        setErrorMessage(error.response.data.message)
      })
      .finally(() => setLoading(false))
  };
  return (
    <Container>
      <TitleContainer>
        <Title title='Welcome to SGBr!' subtitle='Your automatic car search platform!' color={colors.white} size='lg' />
      </TitleContainer>
      <FormContainer>
        <Title title='Login' subtitle='Log in with your credentials.' subtitleColor={colors.gray} />
        <View>
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          <InputText
            label='Name'
            placeholder="Name"
            name='user'
            onChangeText={(value: string) => setValue('user', value)}
          />
          <InputText
            label='Password'
            placeholder="Password"
            name='password'
            secureTextEntry
            onChangeText={(value: string) => setValue('password', value)}
          />
          <Button title="Sign in" onPress={handleSubmit(onSubmit)} loading={loading} />

        </View>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
