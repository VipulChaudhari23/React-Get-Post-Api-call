import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Post() {
  let { id } = useParams();
  const [post, setPost] = useState(0);
  const images = [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/771796",
    "https://via.placeholder.com/600/24f355",
    "https://via.placeholder.com/600/d32776",
    "https://via.placeholder.com/600/f66b97",
    "https://via.placeholder.com/600/56a8c0",
    "https://via.placeholder.com/600/b5faa7",
  ];
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        console.log(data);

        setPost(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
    const [comments,setComments] = useState({
        show: false,
        comments:[]
    });
    const loadComments=() => { 
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((data) => {
            return data.json();
        }).then((data) => { 
            // console.log(data);
            setComments({
                show: true,
                comments:data
            })
         }).catch((err) => { 
                console.log(err);
         })
    }
  return (
    <div>
      {post === 0 ? (
        <h1>Loading....</h1>
      ) : (
        <div className="post">
          <div>
            <img src={`${images[-Math.floor(Math.random() * (0 - 6 + 1))]}`} />
          </div>
          <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
          </div>
                      <button onClick={loadComments} disabled={comments?.show}>Show Comments</button>
                      {comments?.show && (
                          <div>
                              {comments?.comments.map((comment, index) => { 
                                  return (
                                    <div className="comments">
                                      <h3>{comment?.name}</h3>
                                      <h5>{comment?.email}</h5>
                                      <p>{comment?.body}</p>
                                    </div>
                                  );
                              })}
                          </div>
                      )}
        </div>
      )}
    </div>
  );
}

export default Post;
