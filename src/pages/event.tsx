import {PageProps} from 'gatsby';
import * as React from 'react';

const PostsPage: React.FC<PageProps> = ({path}) => {
  return (
    <div>{path}</div>
  );
};

export default PostsPage;
