import React from 'react';
import {
  Flex,
  Link,
  Heading,
  Stack,
  useColorMode,
  Image,
  Text
} from '@chakra-ui/core';
import parseISO from 'date-fns/parseISO';
import { enGB } from 'date-fns/locale';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

const BookmarkItem = ({ link, cover, created, title }) => {
  const { colorMode } = useColorMode();

  const borderColor = {
    light: 'gray.300',
    dark: 'gray.500'
  };

  return (
    <Link
      mb={4}
      href={link}
      title={title}
      isExternal
      _hover={{
        textDecoration: 'none'
      }}
    >
      <Flex
        align="center"
        borderBottom="1px solid"
        borderColor={borderColor[colorMode]}
        p={[4, 2]}
        minWidth={[300, 40, 700]}
      >
        <Image
          size={[75, 150]}
          src={cover}
          alt={title}
          ml={2}
          mr={4}
          style={{
            objectFit: 'contain'
          }}
        />
        <Stack>
          <Heading as="h4" size="sm" fontWeight={400}>
            {title}
          </Heading>
          <Text fontWeight="normal" color="gray.500">
            {formatDistanceToNowStrict(parseISO(created), {
              addSuffix: true,
              locale: enGB
            })}
          </Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default BookmarkItem;
