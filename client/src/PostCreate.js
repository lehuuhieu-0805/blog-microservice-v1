import { useState } from 'react';
import axios from 'axios';

function PostCreate() {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios({
      method: 'POST',
      url: 'http://localhost:4000/posts',
      data: {
        title,
      },
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
