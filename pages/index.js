import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/ PostOwner Example/}
        <PostOwner />

        {/ Comment Example */}
        {comments.map((comment, key) => {
          return (
            <Comment
              key={key}
              likeNum={comment.likeNum}
              username={comment.username}
              content={comment.commentText}
              profileImg={comment.userImagePath}
              replies={comment.replies}
            />
          );
        })}
      </div>
    </div>
  );
}
