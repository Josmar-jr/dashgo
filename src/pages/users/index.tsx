import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Td,
  Tr,
  Thead,
  Th,
  Checkbox,
  Text,
  Tbody,
} from '@chakra-ui/react';
import { Pagination } from 'components/Pagination';

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="full" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              cursor="pointer"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorSchema="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorSchema="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorSchema="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Josmar Jr</Text>
                    <Text fontSize="small" color="gray.300">
                      josmartrigueiro.jr@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>19 de Maio, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    cursor="pointer"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
