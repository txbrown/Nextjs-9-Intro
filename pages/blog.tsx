import Link from 'next/link';
import React from 'react';
import { Box, Flex, Heading, Link as Anchor } from 'rebass';

interface Props {}

const Blog: React.SFC<Props> = () => {
  return (
    <Flex justifyContent="center" p={6}>
      <Box>
        <Box mb={4}>
          <Heading>Blog</Heading>
        </Box>
        <ul>
          <li>
            <Link href="/blog/my-blog-post">
              <Anchor>My Blog Post</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/blog/another-blog-post">
              <Anchor>Another Blog Post</Anchor>
            </Link>
          </li>
        </ul>
      </Box>
    </Flex>
  );
};

export default Blog;
