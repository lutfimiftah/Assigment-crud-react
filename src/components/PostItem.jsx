// src/components/PostItem.jsx
import React, { useState } from 'react';
import PostForm from './Postform';


const PostItem = ({ post, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedPost) => {
    onUpdate({ ...post, ...updatedPost });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <li>
      {isEditing ? (
        <PostForm onSubmit={handleUpdate} initialData={post} />
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default PostItem;
