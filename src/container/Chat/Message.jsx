import { Comment } from "react-loader-spinner";
import React from "react";
const Message = ({ chatMsg, isLast, loading, isValidInput }) => {
  // "bg-slate-200 text-stone-950  rounded-bl-3xl rounded-br-3xl rounded-tr-3xl"
  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full flex justify-end ">
        <div
          className={` break-normal max-w-full text-sm p-3 my-3 w-fit bg-blue-800 text-zinc-100  rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl
        `}
        >
          {chatMsg}
        </div>
      </div>
      {isLast && loading ? (
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#000000"
          backgroundColor="#FFFFFF"
        />
      ) : (
        <div className="w-full flex justify-start ">
          <div
            className={`bg-slate-200 text-sm p-3 my-3 w-fit text-stone-950  rounded-bl-3xl rounded-br-3xl rounded-tr-3xl
        `}
          >
            {isValidInput ? "Done" : "Opps!!! Please try again."}
          </div>
        </div>
      )}
    </div>
  );
};
export default Message;
