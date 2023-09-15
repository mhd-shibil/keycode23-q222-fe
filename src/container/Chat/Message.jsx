import classNames from "classnames";
const Message = ({ chatMsg, isUser }) => {
  return (
    <div>
      <div
        className={classNames("text-sm p-3 my-3", {
          "bg-blue-800 text-zinc-100  rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl":
            isUser,
          "bg-slate-200 text-stone-950  rounded-bl-3xl rounded-br-3xl rounded-tr-3xl":
            !isUser,
        })}
      >
        {chatMsg}
      </div>
    </div>
  );
};
export default Message;
