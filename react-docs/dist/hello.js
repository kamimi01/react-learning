function formatName(user) {
  return user.firstName + " " + user.lastName;
}

var user = {
  firstName: "Harper",
  lastName: "Perez"
};

var element = React.createElement(
  "h1",
  null,
  "Hello, ",
  formatName(user)
);

ReactDOM.render(element, document.getElementById("root"));

function tick() {
  var element = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "hello world"
    ),
    React.createElement(
      "h2",
      null,
      "It is ",
      new Date().toLocaleTimeString(),
      "."
    )
  );
  ReactDOM.render(element, document.getElementById("time"));
}

// 第一引数の関数を、第二引数のミリSごとに実行する
setInterval(tick, 1000);

// 関数コンポーネント
function Welcome(props) {
  return React.createElement(
    "h1",
    null,
    "Hello, ",
    props.name
  );
}

// 以下のようにクラスコンポーネントで書くことも可能（Reactから見ると、この2つは等価）
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// 要素(element)には、ユーザが独自に定義したコンポーネントを表すことも可能
// Reactがこのようなコンポーネント(Welcome)を見つけた場合、
// JSXに書かれている属性(name="Sara")と子要素(ここにはない)を単一のオブジェクトとして（→これが「props」）
// このコンポーネント(Welcome)に渡す
// コンポーネント名は大文字！
var elementWelcom = React.createElement(Welcome, { name: "Sara" });
ReactDOM.render(elementWelcom, document.getElementById("name"));

function App() {
  // 他のコンポーネントを参照することも可能
  return React.createElement(
    "div",
    null,
    React.createElement(Welcome, { name: "Sara" }),
    React.createElement(Welcome, { name: "Cahal" }),
    React.createElement(Welcome, { name: "Edite" })
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById("many_name"));