import Message from "./Message";
const MessageList = ({ list, loading, isValidInput }) => {
  return (
    <div className="space-y-6">
      {list.map((msg, index) => {
        let isLast = false;
        if (index === list.length - 1) isLast = true;
        return (
          <Message
            isValidInput={isValidInput}
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
