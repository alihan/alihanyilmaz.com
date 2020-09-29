import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button
} from '@chakra-ui/core';

import Container from '../components/Container';

const Error = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" fontSize="3rem">
            404 – This page could not be found.
          </Heading>
          <Text color={secondaryTextColor[colorMode]} my={4}>
            This page does not exist. Probably, you spelled something wrong.
          </Text>
          <NextLink href="/" passHref>
            <Button
              as="a"
              p={[1, 4]}
              w="250px"
              fontWeight="bold"
              m="3rem auto 0"
            >
              Return Home
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Error;
