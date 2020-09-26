import React, { useState } from 'react';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Icon,
  Link
} from '@chakra-ui/core';

import { frontMatter as blogPosts } from './blog/**/*.mdx';

const Index = () => {
  const { colorMode } = useColorMode();

  const borderColor = {
    light: 'gray.700',
    dark: 'gray.200'
  };
  const iconColor = {
    light: 'gray.1000',
    dark: 'white'
  };

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
            {`I’m a student, Jr. Front-end developer, and constant learner.
                I've been writing online since 2014, mostly about web development and tech careers.
                In total, I've written ${blogPosts.length} articles on this site.
                Use the search below to filter by title.`}
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          {filteredBlogPosts && (
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
          )}
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
          <Flex
            alignItems="center"
            width="100%"
            justifyContent="space-between "
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
            <Link
              href="https://github.com/alihan"
              passHref
              isExternal
              ml={8}
              _hover={{
                transform: 'scale(1.02)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none'
              }}
            >
              <Flex
                alignItems="center"
                border="1px solid"
                borderColor={borderColor[colorMode]}
                borderRadius={4}
                p={3}
              >
                <Text fontWeight={500}>See More</Text>
                <Icon
                  aria-label="LinkedIn"
                  name="github"
                  color={iconColor[colorMode]}
                  size="20px"
                  ml={4}
                  mr={2}
                />
              </Flex>
            </Link>
          </Flex>
          <ProjectCard
            title="Twitter React Clone"
            description="Build Twitter UI using ReactJS, Storybook, and NextJS. Following through Adem Ilter's course."
            href="https://twitter-react-ez5wita3g.vercel.app/"
            icon="twitter"
          />
          <ProjectCard
            title="Quiz App"
            description="Build Quiz Application with Vanilla JS. Used Fetch API to get questions, and Web Storage API to store high scores."
            href="https://quiz-app-mu.vercel.app/"
            icon="check"
          />
          <ProjectCard
            title="JS 30"
            description="Build 30 different things with Vanilla JS. Following through Wes Bos' course, applied own solutions."
            href="https://alihan.github.io/JS30/"
            icon="js"
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
