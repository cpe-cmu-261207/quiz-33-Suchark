// import React from "react";
// import Reply from "./Reply";

// export default function Comment(props) {
//   return (
//     <div>
//       <div>
//         <div className="d-flex gap-2 my-2">
//           <img
//             src="{props.proflieImg}"
//             width="48"
//             height="48"
//             className="rounded-circle"
//             style={{ objectFit: "cover" }}
//           />
//           <div
//             className="rounded rounded-3 p-2"
//             style={{ backgroundColor: "#3A3B3C" }}
//           >
//             <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
//               {props.username}
//             </span>
//             <br />
//             <span style={{ color: "#E4E6EB" }}>{props.content}</span>
//             <div

//             className={props.likeNum > 0 ? "d-flex align-items-center gap-1" : "d-non">}

//               <img src="/like.svg" width={20}></img>
//               <span style={{ color: "#B0B3B8" }}>{props.likeNum}</span>
//             </div>
//           </div>

//           {props.replies.map((reply,i) => {
//             return (<Reply
//             key = {i}
//             owner = {reply.username}
//             content = {reply.replyText}
//             proflie_image = {reply.userImagePath}
//             liked = {reples.likeNum}
//           />
//             );

//           })}
//        </div>
//     </div>
//   );
// }

import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      <div>
        <div className="d-flex gap-2 my-2">
          <img
            src={props.profileImg}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {props.username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{props.content}</span>
            <div
              className={
                props.likeNum > 0 ? "d-flex align-items-center gap-1" : "d-none"
              }
            >
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{props.likeNum}</span>
            </div>
          </div>
        </div>

        {props.replies.map((reply, i) => {
          return (
            <Reply
              key={i}
              profileImg={reply.userImagePath}
              likeNum={reply.likeNum}
              username={reply.username}
              content={reply.replyText}
            />
          );
        })}
      </div>
    </div>
  );
}
