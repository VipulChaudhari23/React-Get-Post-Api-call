import React, { useState } from "react";
import { Link } from "react-router-dom";
function AddPost() {
  const [postInput, setPostInput] = useState({
    title: "",
    body: "",
    userId: 0,
  });
  const onChangeInput = (e) => {
    setPostInput({
      ...postInput,
      [e.target.name]: e.target.value,
    });
    };
    const postData = () => { 
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify(postInput),
          headers: {
            "Content-Type": "application/json",
          },
        })
            .then(function (res) {
              
            return res.json();
          })
          .then(function (data) {
            console.log(data.id);
            alert(`New post added with values (server responded with below data) ${JSON.stringify(data)}`);
          });
    }
  return (
    <div>
      
      <div className="postheading">
        <h1>Add New Post</h1>
        <div>
          <Link to="/">
            <button>Back to homepage</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="form">
          <input
            type="text"
            onChange={onChangeInput}
            name="title"
            placeholder="title"
          />
          <textarea
            type="text"
            onChange={onChangeInput}
            name="body"
            placeholder="body"
          />
          <input
            type="number"
            onChange={onChangeInput}
            name="userId"
            placeholder="userId"
          />
          <button
            onClick={() => {
              console.log(postInput);
              postData();
            }}
          >
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
