function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}</h1>;

ReactDOM.render(element, document.getElementById("root"));

class Clock extends React.Component {
  // コンストラクタは常にpropsを引数とし、親クラスのコンストラクタを呼び出す
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // DOMがレンダーされた後に実行される
  componentDidMount() {
    // propsやstate以外にも、何かデータフローに影響しないデータを保存したい場合に
    // 追加のフィールドを手動でクラスに定義するのは自由！
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // DOMが削除される時
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // コンポーネントのローカルstateの更新をスケジュールするためにthis.setStateを使う
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function AppTime() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(<AppTime />, document.getElementById("time"));

// 第一引数の関数を、第二引数のミリSごとに実行する
// Clock自身がタイマーを設定して毎秒ごとに更新するため、ここは削除
// setInterval(tick, 1000);

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
