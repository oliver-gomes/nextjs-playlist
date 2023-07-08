import React from "react";

const getSinglePost = async ({ id }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
};

const getPostComment = async ({ id }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );

  const data = await response.json();
  return data;
};

const SinglePost = async ({ params: id }) => {
  const getSinglePostData = await getSinglePost(id);
  const getPostCommentData = await getPostComment(id);

  const [post, comments] = await Promise.all([
    getSinglePostData,
    getPostCommentData,
  ]);

  return (
    <div>
      Post Body:
      {post.body}
      <div className="mt-12">
        Comments:
        {comments.map((comment) => (
          <p className="py-2" key={comment.id}>
            {comment.body}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SinglePost;
