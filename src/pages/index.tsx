import { Flex, Stack, Button } from '@chakra-ui/react';
import { Input } from 'components/Form/Input';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Stack
        spacing="4"
        as="form"
        flexDir="column"
        w="full"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <Input name="email" type="email" label="Email" />
        <Input name="password" type="password" label="Senha" />

        <Button type="submit" mt="8" colorScheme="pink" w="full">
          Entrar
        </Button>
      </Stack>
    </Flex>
  );
}
