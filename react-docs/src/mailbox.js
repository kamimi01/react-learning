// 論理 && 演算子によるインラインif

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  // falseになっても、falsyな値そのものは返されるので、countのところは0が表示される
  const count = 0;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
      {count && <h1>Messages: {count}</h1>}
    </div>
  );
}

const messages = ["React", "Re: React", "Re:Re: React"];

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById("mailbox")
);
