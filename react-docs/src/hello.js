function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}</h1>;

ReactDOM.render(element, document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>hello world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("time"));
}

// 第一引数の関数を、第二引数のミリSごとに実行する
setInterval(tick, 1000);

// 関数コンポーネント
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
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
const elementWelcom = <Welcome name="Sara" />;
ReactDOM.render(elementWelcom, document.getElementById("name"));

function App() {
  // 他のコンポーネントを参照することも可能
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("many_name"));
