import Link from 'next/link';
import React from 'react';

const Blog = props => {
  return (
    <div>
      Blog
      <ul>
        <li>
          <Link href="/blog/my-blog-post">
            <a>My Blog Post</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/another-blog-post">
            <a>Another Blog Post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
