import Head from 'next/head';

import { Flex, Stack, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from 'components/Form/Input';

type SignInFromData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignInFromData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFromData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    reset();
  };

  return (
    <>
      <Head>
        <title>Bem-vindo | Dashgo</title>
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          flexDir="column"
          w="full"
          maxW={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              type="email"
              label="Email"
              error={errors.email}
              {...register('email')}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />
          </Stack>
          <Button
            type="submit"
            mt="8"
            colorScheme="pink"
            size="lg"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
