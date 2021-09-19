import Link from 'next/link';

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
  useBreakpointValue,
} from '@chakra-ui/react';
import { Pagination } from 'components/Pagination';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="full" my="6" justify="center" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
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
            </Link>
          </Flex>

          <Table colorSchema="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" w="8">
                  <Checkbox colorSchema="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
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
                {isWideVersion && <Td>19 de Maio, 2021</Td>}
                <Td>
                  {isWideVersion && (
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
                  )}
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
