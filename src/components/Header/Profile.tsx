import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Josmar Junior</Text>
          <Text color="gray.300" fontSize="small">
            josmartrigueiro.jr@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Josmar" src="https://github.com/Josmar-jr.png" />
    </Flex>
  );
}
