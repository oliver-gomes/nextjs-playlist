import Link from "next/link";
import React from "react";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const PostPage = async () => {
  const getAllPosts = await getPosts();

  return (
    <div>
      {getAllPosts.map((post) => (
        <div>
          <Link href={`/posts/${post.id}`}>
            <p>{post.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
