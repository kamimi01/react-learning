// 論理 && 演算子によるインラインif

function Mailbox(props) {
  var unreadMessages = props.unreadMessages;
  // falseになっても、falsyな値そのものは返されるので、countのところは0が表示される
  var count = 0;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Hello!"
    ),
    unreadMessages.length > 0 && React.createElement(
      "h2",
      null,
      "You have ",
      unreadMessages.length,
      " unread messages."
    ),
    count && React.createElement(
      "h1",
      null,
      "Messages: ",
      count
    )
  );
}

var messages = ["React", "Re: React", "Re:Re: React"];

ReactDOM.render(React.createElement(Mailbox, { unreadMessages: messages }), document.getElementById("mailbox"));