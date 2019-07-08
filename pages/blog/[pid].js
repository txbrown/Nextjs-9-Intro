import fetch from 'isomorphic-fetch';
import ErrorPage from 'next/error';
import { withRouter } from 'next/router';
import React from 'react';

class Post extends React.Component {
  static async getInitialProps({ query }) {
    // pid = 'hello-nextjs'
    const { pid } = query;

    const data = await fetch(
      `http://localhost:3000/api/posts/${encodeURIComponent(pid)}`
    ).then(r => r.json());

    return { postContent: data.content };
  }

  render() {
    const { postContent, router } = this.props;
    const { pid } = router.query;

    if (!postContent) return <ErrorPage statusCode={404} />;

    return (
      <div>
        <h3>Post: {pid}</h3>
        <p>{postContent}</p>
      </div>
    );
  }
}

Post.propTypes = {};

export default withRouter(Post);
