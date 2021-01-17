import React from 'react';
import { NextSeo } from 'next-seo';

import groupBy from 'lodash.groupby';
import { en } from 'date-fns/locale';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { useColorMode, Heading, Text, Flex, Stack, Box } from '@chakra-ui/core';

import BookmarkItem from '../components/BookmarkItem';
import Container from '../components/Container';
import { getBookmark } from '../lib/raindrop';

const url = 'https://alihanyilmaz.com/bookmarks';
const title = 'Bookmarks – Alihan Yılmaz';
const description =
  'Things I like and want to save while surfing the internet.';

const Bookmarks = ({ dataGroupByDay }) => {
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
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
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Bookmarks
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4} fontSize="17px">
              These are my bookmarks about mostly software development and
              technology.
            </Text>
            {Object.keys(dataGroupByDay).map((date) => (
              <Box mt={6} key={date}>
                <Heading
                  tag="h4"
                  size="sm"
                  fontWeight="normal"
                  color="gray.500"
                  pl={[0, 0, 4]}
                  mb={[2, -2]}
                >
                  {date}
                </Heading>
                <>
                  {dataGroupByDay[date].map((item) => {
                    return <BookmarkItem key={item.title} {...item} />;
                  })}
                </>
              </Box>
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const data = await getBookmark();

  const dataGroupByDay = groupBy(data, (item) => {
    return format(parseISO(item.created), 'd MMMM yyyy', { locale: en });
  });

  return {
    props: {
      data,
      dataGroupByDay
    },
    revalidate: 60
  };
}

export default Bookmarks;
