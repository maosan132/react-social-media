import React, { useRef } from 'react';

const CreatePost = ({user, setPosts, posts}) => {
  const [content, setContent] = React.useState({
    title: '',
    body: ''
  });
  const [image, setImage] = React.useState(null);
  const inputImageRef = React.useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {content, image, user};
    const newPosts = [post, ...posts];
    setPosts(newPosts);
    setContent({title: '', body: ''});
    inputImageRef.current.value = '';
  }

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label><br />
        <input
          type="text"
          onChange={e => setContent({ ...content, title: e.target.value })}
          value={content.title}
        /><br />
        <label>Body: </label><br />
        <textarea
          placeholder='Add post content'
          onChange={e => setContent({ ...content, body: e.target.value })}
          value={content.body}
        /><br />
        <label>Add image: </label><br />
        <input
        type="file"
        onChange={e => setImage(e.target.files[0])}
        ref={inputImageRef}
        /><br /><br />
        <button type="submit">Submit post </button>
      </form>

      {/* <div style={{border: 'solid', minHeight: 100, padding: 10}}>
        <p>{content.title}</p>
        {image && <img
          // src={image ? URL.createObjectURL(image) : ''} // works but it has a phantom image
          src={URL.createObjectURL(image)}
          alt="Post"
          style={{height: 100, width: 200, objectFit: 'cover' }}
        />}
      </div>*/}
    </div>
  );
}

export default CreatePost;