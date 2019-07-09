import Link from 'next/link';
import React from 'react';
import { Box, Button, Flex } from 'rebass';

interface Props {}

const Index: React.SFC<Props> = () => {
  return (
    <Flex justifyContent="center" alignItems="center" p={6}>
      <Box>
        <Link href="/blog">
          <Button>Blog</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Index;
