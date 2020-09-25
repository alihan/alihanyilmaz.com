import React from 'react';
import * as Fathom from 'fathom-client';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  Icon,
  useColorMode
} from '@chakra-ui/core';

const trackGoal = (title) => {
  const goalCodes = {
    'React 2025': '5WGDOKV0',
    'Mastering Next.js': 'HV9HDL0O',
    jamstackfns: 'LRXBPLZS'
  };

  Fathom.trackGoal(goalCodes[title], 0);
};

const ProjectCard = ({ title, description, href, icon }) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.300',
    dark: 'gray.500'
  };

  const iconColor = {
    light: 'gray.1000',
    dark: 'white'
  };
  
  const boxShadow = {
    light: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    dark: '0px 4px 20px rgba(255, 255, 255, 0.05)'
  };

  return (
    <Link
      mb={4}
      href={href}
      onClick={() => trackGoal(title)}
      title={title}
      isExternal
      _hover={{
        boxShadow: `${boxShadow[colorMode]}`,
        textDecoration: 'none',
        transform: 'perspective(100px) rotateX(2deg) translateY(1px) scale(1.001)'
      }}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        p={4}
      >
        <Icon
          aria-label="LinkedIn"
          name={icon}
          color={iconColor[colorMode]}
          size="32px"
          ml={2}
          mr={4}
        />
        <Stack>
          <Heading
            as="h4"
            size="md"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
          >
            {title}
          </Heading>
          <Text lineHeight="1.4">{description}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default ProjectCard;
