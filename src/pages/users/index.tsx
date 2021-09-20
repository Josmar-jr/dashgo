import Head from 'next/head';
import NextLink from 'next/link';

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
  Link,
  Checkbox,
  Text,
  Tbody,
  useBreakpointValue,
  Spinner,
} from '@chakra-ui/react';

import { Pagination } from 'components/Pagination';
import { UseUsers } from 'services/hooks/useUsers';
import { useState } from 'react';

import { api } from 'services/api';
import { queryClient } from 'services/queryClient';

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = UseUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePreFetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const { data } = await api.get(`user/${userId}`);

        return data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      }
    );
  }

  return (
    <>
      <Head>
        <title>User List | Dashgo</title>
      </Head>
      <Box>
        <Header />
        <Flex w="full" my="6" justify="center" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && (
                  <Spinner size="sm" color="gray.300" ml="4" />
                )}
              </Heading>
              <NextLink href="/users/create" passHref>
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
              </NextLink>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex>
                <Text>Falha ao obter dados dos usuários</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={['4', '4', '6']} color="gray.300" w="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th w="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.users.map((user) => (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Link
                              color="purple.400"
                              onMouseEnter={() => handlePreFetchUser(user.id)}
                            >
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
                            <Text fontSize="small" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          {isWideVersion && (
                            <Button
                              as="a"
                              cursor="pointer"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize="16" />
                              }
                            >
                              Editar
                            </Button>
                          )}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
