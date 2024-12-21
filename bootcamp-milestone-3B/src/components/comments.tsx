type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  const dateObj = new Date(time);
  return dateObj.toLocaleString();
}

function Comment({ comment }: CommentProps) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
      <h4 style={{ margin: "0", fontWeight: "bold" }}>{comment.user}, </h4>
      <p style={{ margin: "5px 0" }}>{comment.comment}</p>
      <span style={{ fontSize: "0.8em", color: "gray" }}>
        {parseCommentTime(comment.time)}
      </span>
    </div>
  );
}

export default Comment;
