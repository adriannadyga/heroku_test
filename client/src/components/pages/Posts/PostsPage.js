import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostCounter from  '../../features/PostCounter/PostCounterContainer';
import Posts from '../../features/Posts/PostsContainer';

const PostsPage = () => (
  <div>
    <PageTitle>Posts list</PageTitle>
    <PostCounter />
    <Posts />
  </div>
);

export default PostsPage;