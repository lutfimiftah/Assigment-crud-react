// src/components/PostList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import PostForm from './Postform';
import '../PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = async (newPost) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleUpdatePost = async (updatedPost) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost);
      setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h1>Pesan Dari Masa Lalu 🎇</h1>
      <PostForm onSubmit={handleCreatePost} />
      <ul>
        {posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            onUpdate={handleUpdatePost}
            onDelete={handleDeletePost}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
