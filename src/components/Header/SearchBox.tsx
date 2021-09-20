import { useRef } from 'react';

import { RiSearchLine } from 'react-icons/ri';

import { Flex, Icon, Input } from '@chakra-ui/react';

// Controlled components
// Uncontrolled components

// Imperativa vs Declarativa

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // searchInputRef.current.focus()  -  Imperativa

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bgColor="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        px="4"
        placeholder="buscar na plataforma"
        _placeholder={{
          color: 'gray.400',
        }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
