import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
    const [post, setPosts] = useState([]);
   
    
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
            // console.log(data.json());
            return data.json();
        }).then((data) => { 
            console.log(data);
            setPosts(data);
        }).catch((err) => { 
            console.log(err);
        });
    }, [])
    const images = [
      "https://via.placeholder.com/150/92c952",
      "https://via.placeholder.com/150/771796",
      "https://via.placeholder.com/150/24f355",
      "https://via.placeholder.com/150/d32776",
      "https://via.placeholder.com/150/f66b97",
      "https://via.placeholder.com/150/56a8c0",
      "https://via.placeholder.com/150/b5faa7",
    ];
  return (
    <div>
      <div className="postheading">
        <h1>Post Feed</h1>
        <div>
          <Link to="/new-post">
            <button>Add New Post</button>
          </Link>
        </div>
      </div>

      {/* {getImages(1)} */}
      <>
        {post.length > 0 ? (
          post.map((data, index) => {
            return (
              <Link key={index} to={`/${data?.id}`}>
                <div className="posts">
                  <div>
                    <img
                      src={`${
                        images[-Math.floor(Math.random() * (0 - 6 + 1))]
                      }`}
                      alt={`${data?.title}`}
                    />
                  </div>
                  <div>
                    <h2>
                      {data?.id} :- {data?.title}
                    </h2>
                    <p>{data?.body}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    </div>
  );
}

export default Home