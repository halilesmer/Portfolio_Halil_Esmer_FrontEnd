import { useState, useEffect } from "react";
import { Container } from '@mui/material';
import { Box } from '@mui/system'

export const About = () => {

 // const [posts, setPosts] = useState([]);

/*   useEffect(() => {
    const fecthPosts = async () => {
      try {
        const res = await fetch(`/api/v1/posts`);
        const { data } = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fecthPosts();
  }, []); */


  return (
    <Box id="about">
      {/* <Container maxWidth="lm">
        {posts && posts.map((post, index) => {
          return (
            <div key={index}>
              <h1>{post.title}</h1>
              <p>{post.description_1}</p>
              <p>{post.contact_1}</p>
            </div>
          )
        })}

      </Container> */}
    </Box>
  );


};


