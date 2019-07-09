import fetch from 'isomorphic-fetch';
import { WithRouterProps } from 'next/dist/client/with-router';
import ErrorPage from 'next/error';
import { withRouter } from 'next/router';
import React from 'react';
import { Box, Flex, Heading, Text } from 'rebass';

interface BlogPost {
  title: string;
  content: string;
}

interface Props {
  blogPost: BlogPost;
}

class Post extends React.Component<Props & WithRouterProps> {
  static async getInitialProps({ query }) {
    const { pid } = query;

    const blogPost: BlogPost = await fetch(
      `http://localhost:3000/api/posts/${encodeURIComponent(pid)}`
    ).then(r => r.json());

    return { blogPost };
  }

  render() {
    const { blogPost, router } = this.props;
    const { pid } = router.query;

    if (!blogPost)
      return <ErrorPage statusCode={404} title={`${pid} not found`} />;

    return (
      <Flex p={6}>
        <Box>
          <Heading mb={4}>{blogPost.title}</Heading>
          <Text>{blogPost.content}</Text>
        </Box>
      </Flex>
    );
  }
}

export default withRouter(Post);
