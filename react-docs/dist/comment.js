function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return React.createElement(
    "div",
    { className: "Comment" },
    React.createElement(UserInfo, { user: props.author }),
    React.createElement(
      "div",
      { className: "Comment-text" },
      props.text
    ),
    React.createElement(
      "div",
      { className: "Comment-date" },
      formatDate(props.date)
    )
  );
}

function Avatar(props) {
  // AvatarはCommentから呼ばれていることを知る必要はないので、
  // propsの名前はauthorよりも一般的なuserと名付ける
  // コンポーネントが使用される文脈ではなく、自身からの観点で名付けする！
  return React.createElement("img", { className: "Avatar", src: props.user.avatarUrl, alt: props.user.name });
}

function UserInfo(props) {
  return React.createElement(
    "div",
    { className: "UserInfo" },
    React.createElement(Avatar, { user: props.user }),
    React.createElement(
      "div",
      { className: "UserInfo-name" },
      props.user.name
    )
  );
}

var comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

ReactDOM.render(React.createElement(Comment, { date: comment.date, text: comment.text, author: comment.author }), document.getElementById("comment"));