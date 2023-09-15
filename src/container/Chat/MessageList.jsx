import Message from "./Message";
<Message chatMsg={"hi......."} isUser={true} />;
const MessageList = ({ list }) => {
  return (
    <div className="space-y-6">
      {list.map((msg) => {
        return <Message chatMsg={msg} isUser={true} />;
      })}
    </div>
  );
};
export default MessageList;
