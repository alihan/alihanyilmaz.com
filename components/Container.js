import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/core';

import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 0]}
        mb={8}
        mx="auto"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={toggleColorMode}
          variant="solid"
        />
        <Menu>
          <MenuButton
            as={IconButton}
            variant="solid"
            icon="hamburger"
            display={{ md: 'none', lg: 'none', sm: 'block', base: 'block' }}
          />
          <MenuList m={6}>
            <NextLink href="/" passHref>
              <MenuItem
                justifyContent="flex-start"
                px={4}
                py={3}
                mx={2}
                borderRadius={6}
                maxWidth="206px"
              >
                Home
              </MenuItem>
            </NextLink>
            <NextLink href="/blog" passHref>
              <MenuItem
                justifyContent="flex-start"
                px={4}
                py={3}
                mx={2}
                borderRadius={6}
                maxWidth="206px"
              >
                Blog
              </MenuItem>
            </NextLink>
            <NextLink href="/bookmarks" passHref>
              <MenuItem
                justifyContent="flex-start"
                px={4}
                py={3}
                mx={2}
                borderRadius={6}
                maxWidth="206px"
              >
                Bookmarks
              </MenuItem>
            </NextLink>
            <NextLink href="/resume" passHref>
              <MenuItem
                justifyContent="flex-start"
                px={4}
                py={3}
                mx={2}
                borderRadius={6}
                maxWidth="206px"
              >
                Resume
              </MenuItem>
            </NextLink>
          </MenuList>
        </Menu>
        <Box display={{ md: 'block', lg: 'block', base: 'none', sm: 'none' }}>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={4} fontSize="17px">
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={4} fontSize="17px">
              Blog
            </Button>
          </NextLink>
          <NextLink href="/bookmarks" passHref>
            <Button as="a" variant="ghost" p={4} fontSize="17px">
              Bookmarks
            </Button>
          </NextLink>
          <NextLink href="/resume" passHref>
            <Button as="a" variant="ghost" p={4} fontSize="17px">
              Resume
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <motion.div
        initial={{
          opacity: 0,
          y: 100
        }}
        animate={{
          opacity: 1,
          y: 0,
          transitionDuration: '.5s'
        }}
      >
        <Flex
          as="main"
          justifyContent="center"
          flexDirection="column"
          bg={bgColor[colorMode]}
          color={primarytextColor[colorMode]}
          px={8}
        >
          {children}
          <Footer />
        </Flex>
      </motion.div>
    </>
  );
};

export default Container;
