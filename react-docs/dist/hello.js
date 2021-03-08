var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  // コンストラクタは常にpropsを引数とし、親クラスのコンストラクタを呼び出す
  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  // DOMがレンダーされた後に実行される


  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // propsやstate以外にも、何かデータフローに影響しないデータを保存したい場合に
      // 追加のフィールドを手動でクラスに定義するのは自由！
      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }

    // DOMが削除される時

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      // コンポーネントのローカルstateの更新をスケジュールするためにthis.setStateを使う
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
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
          this.state.date.toLocaleTimeString(),
          "."
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

function AppTime() {
  return React.createElement(
    "div",
    null,
    React.createElement(Clock, null),
    React.createElement(Clock, null),
    React.createElement(Clock, null)
  );
}

ReactDOM.render(React.createElement(AppTime, null), document.getElementById("time"));

// 第一引数の関数を、第二引数のミリSごとに実行する
// Clock自身がタイマーを設定して毎秒ごとに更新するため、ここは削除
// setInterval(tick, 1000);

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