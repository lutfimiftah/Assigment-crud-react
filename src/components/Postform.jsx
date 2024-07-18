// src/components/PostForm.jsx
import React, { useState } from 'react';


const PostForm = ({ onSubmit, initialData = { title: '', body: '' } }) => {
  const [title, setTitle] = useState(initialData.title);
  const [body, setBody] = useState(initialData.body);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama Penulis:</label>
        <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
    </div>

      <div>
        <label>Pesan Untuk Masa Depan:</label>
        <div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        </div>
      </div>

      <button type="submit">Kirim</button>
    </form>
  );
};

export default PostForm;
