import React, { useState } from 'react';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import { frontMatter as blogPosts } from './blog/**/*.mdx';

const Index = () => {
  const { colorMode } = useColorMode();
  const [searchValue, setSearchValue] = useState('');

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const filteredBlogPosts = blogPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
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
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hi, I’m Alihan Yılmaz
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I’m a student, Jr. Frontend developer, and constant learner.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading
            letterSpacing="tight"
            mt={8}
            mb={8}
            as="h2"
            size="xl"
            fontWeight={500}
          >
            Blog Posts
          </Heading>
          {!filteredBlogPosts.length && 'No posts found.'}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading
            letterSpacing="tight"
            mt={8}
            mb={8}
            as="h2"
            size="xl"
            fontWeight={500}
          >
            Projects
          </Heading>
          <ProjectCard
            title="React 2025"
            description="Build and deploy a modern Jamstack application using the most popular open-source software."
            href="https://react2025.com/"
            icon="react2025"
          />
          <ProjectCard
            title="Mastering Next.js"
            description="A free video course for building static and server-side rendered applications with Next.js and React."
            href="https://masteringnextjs.com/"
            icon="nextjs"
          />
          <ProjectCard
            title="jamstackfns"
            description="The best serverless functions for JAMstack applications. Deploy to Vercel or Netlify for your static site."
            href="https://jamstackfns.com/"
            icon="jamstackfns"
          />
        </Flex>
        <Timeline />
      </Stack>
    </Container>
  );
};

export default Index;
