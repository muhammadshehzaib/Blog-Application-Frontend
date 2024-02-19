import React from "react";

interface CommentsProps {
  comment: string;
  blogId: string; // Adjust the type as needed
}

const Comments: React.FC<CommentsProps> = ({ comment, blogId }) => {
  return (
    <div>
      <div className="border-blue-600 text-black">{comment}</div>
    </div>
  );
};

export default Comments;
