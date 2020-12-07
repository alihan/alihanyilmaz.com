import React from 'react';
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
            fontSize="22px"
            color={iconColor[colorMode]}
            variant="ghost"
          />
        </Link>
        <Link
          href="https://twitter.com/_alihanyilmaz"
          title="Twitter"
          isExternal
        >
          <IconButton
            aria-label="Twitter"
            icon="twitter"
            fontSize="22px"
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
      </div>
      <div>
        <Link href="mailto:alihanyiilmaz@gmail.com" title="Email" isExternal>
          <Flex fontWeight={600}>
            alihanyiilmaz
            <Text mx={1} fontWeight={400}>
              at
            </Text>
            gmail
            <Text mx={1} fontWeight={400}>
              dot
            </Text>
            com
          </Flex>
        </Link>
      </div>
    </Flex>
  );
};

export default Footer;
