import Message from "./Message";
const MessageList = ({ list, loading }) => {
  return (
    <div className="space-y-6">
      {list.map((msg, index) => {
        let isLast = false;
        if (index === list.length - 1) isLast = true;
        return (
          <Message
            chatMsg={msg}
            isUser={true}
            isLast={isLast}
            loading={loading}
          />
        );
      })}
    </div>
  );
};
export default MessageList;
