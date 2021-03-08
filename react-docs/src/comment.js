function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

function Avatar(props) {
  // AvatarはCommentから呼ばれていることを知る必要はないので、
  // propsの名前はauthorよりも一般的なuserと名付ける
  // コンポーネントが使用される文脈ではなく、自身からの観点で名付けする！
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("comment")
);
