import React from 'react';
import NextLink from 'next/link';

import DateFormatter from './DateFormatter';

import { Heading, Text, Flex, Box, Link } from '@chakra-ui/core';

const BlogPost = (frontMatter) => {
  const { title, publishedAt } = frontMatter;

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return (
    <NextLink href={`/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={'column'}
          >
            <Heading size="md" as="h3" mb="0.15rem" fontWeight={500}>
              {title}
            </Heading>
            <Flex width="100%" align="flex-start" flexDirection={'row'}>
              <Text
                fontSize="md"
                color="gray.500"
                minWidth="105px"
                textAlign={['left', 'right']}
                mb={[4, 0]}
              >
                <DateFormatter dateString={publishedAt} />
                {` • `}
              </Text>
              <Text fontSize="md" color="gray.500" minWidth="100px" ml={1}>
                {frontMatter.readingTime.text}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
