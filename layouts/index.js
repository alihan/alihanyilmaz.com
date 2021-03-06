import React, { useState } from 'react';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  IconButton,
  useClipboard,
  Button
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogSeo from '../components/BlogSeo';

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  const [value, setValue] = useState(`https://alihanyilmaz.com/blog/${slug}`);
  const { hasCopied, onCopy } = useClipboard(value);
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const iconColor = {
    light: 'gray.700',
    dark: 'gray.200'
  };

  const shareTwitter = (e) => {
    e.preventDefault();
    window.open(
      `https://twitter.com/intent/tweet/?text=${
        frontMatter.title
      }&url=${`https://alihanyilmaz.com/blog/${slug} via @_alihanyilmaz`}`,
      '_blank'
    );
  };

  const shareLinkedin = (e) => {
    e.preventDefault();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${`https://alihanyilmaz.com/blog/${slug}`}`,
      '_blank'
    );
  };

  return (
    <Container>
      <BlogSeo url={`https://alihanyilmaz.com/${slug}`} {...frontMatter} />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={4}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="md"
                name="Alihan Yılmaz"
                src="https://bit.ly/3mYVjWS"
                alt="Alihan Yılmaz"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by}
                {'Alihan Yılmaz'}
                <Text
                  fontSize="sm"
                  color="gray.500"
                  minWidth="100px"
                  mt={[2, 0]}
                >
                  {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                  {` • `}
                  {frontMatter.readingTime.text}
                  {` `}
                </Text>
              </Text>
            </Flex>
            <Flex justify={['initial', 'center']} align="center" mt={[4, 0]}>
              <Button
                onClick={onCopy}
                mr={2}
                variant="outline"
                size="sm"
                rightIcon="copy"
              >
                {hasCopied ? 'Copied' : 'Copy Link'}
              </Button>

              <IconButton
                aria-label="Twitter"
                icon="twitterfill"
                fontSize="22px"
                color={iconColor[colorMode]}
                variant="ghost"
                size="sm"
                onClick={shareTwitter}
              />

              <IconButton
                aria-label="LinkedIn"
                icon="linkedinfill"
                fontSize="24px"
                color={iconColor[colorMode]}
                variant="ghost"
                size="sm"
                onClick={shareLinkedin}
              />
            </Flex>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
}
