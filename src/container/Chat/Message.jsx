const Message = ({ chatMsg, isUser }) => {
  return (
    <>
      <div className="w-full justify-end flex">
        <div
          className={`text-sm p-3 my-3 w-fit ${
            isUser
              ? "bg-blue-800 text-zinc-100 text-lg font-semibold rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl"
              : "bg-slate-200 text-stone-950  rounded-bl-3xl rounded-br-3xl rounded-tr-3xl"
          }
        `}
        >
          {chatMsg}
        </div>
      </div>
      <div className="w-full justify-start flex">
        <div
          className={`text-sm p-3 my-3 w-fit font-semibold bg-slate-200 text-stone-950 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl`}
        >
          {chatMsg}
        </div>
      </div>
    </>
  );
};
export default Message;
