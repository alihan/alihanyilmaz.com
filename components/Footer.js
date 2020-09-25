import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton, Text, useColorMode } from '@chakra-ui/core';

const Footer = () => {
  const { colorMode } = useColorMode();

  const iconColor = {
    light: 'gray.700',
    dark: 'gray.200'
  };
  return (
    <Flex
      align="center"
      mb={4}
      direction={['column', 'row']}
      justify="space-around"
    >
      <div>
        <Link href="https://github.com/alihan" title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon="github"
            fontSize="23px"
            color={iconColor[colorMode]}
            variant="ghost"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alihanyiilmaz"
          title="LinkedIn"
          isExternal
        >
          <IconButton
            aria-label="LinkedIn"
            icon="linkedin"
            fontSize="25px"
            color={iconColor[colorMode]}
            variant="ghost"
          />
        </Link>
        <Link href="mailto:alihanyiilmaz@gmail.com" title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon="mail"
            fontSize="25px"
            color={iconColor[colorMode]}
            variant="ghost"
          />
        </Link>
      </div>
      <div>
        <Flex fontWeight={600}>
          alihanyiilmaz
          <Text mx={1} fontWeight={300}>
            at
          </Text>
          gmail
          <Text mx={1} fontWeight={300}>
            dot
          </Text>
          com
        </Flex>
      </div>
    </Flex>
  );
};

export default Footer;
