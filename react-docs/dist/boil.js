var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateのリフトアップとは↓
// コンポーネント間でstateの共有をしたい場合は、
// それを必要とするコンポーネント全ての直近の共通祖先コンポーネントに移動する

/**
 * 水が沸騰するのに、十分な温度かどうかを表示する
 * @param {celsius} props
 */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return React.createElement(
      "p",
      null,
      "The water would boil."
    );
  }
  return React.createElement(
    "p",
    null,
    "The water would not boil."
  );
}

var scaleNames = {
  c: "Celsuis",
  f: "Fahrenheit"
};

var TemperatureInput = function (_React$Component) {
  _inherits(TemperatureInput, _React$Component);

  function TemperatureInput(props) {
    _classCallCheck(this, TemperatureInput);

    var _this = _possibleConstructorReturn(this, (TemperatureInput.__proto__ || Object.getPrototypeOf(TemperatureInput)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.state = { temperature: "" };
    return _this;
  }

  _createClass(TemperatureInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var temperature = this.props.temperature;
      var scale = this.props.scale;
      return React.createElement(
        "fieldset",
        null,
        React.createElement(
          "legend",
          null,
          "Enter temperature in ",
          scaleNames[scale]
        ),
        React.createElement("input", { value: temperature, onChange: this.handleChange })
      );
    }
  }]);

  return TemperatureInput;
}(React.Component);

/**
 * 摂氏から華氏に変換するための関数2つ
 */


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

/**
 * 常に少数第3位までで四捨五入し、無効な温度には空の文字列を返す
 */
function tryConvert(temperature, convert) {
  var input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  var output = convert(input);
  var rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

/**
 * 温度を入力するための<input>要素のレンダーと
 * 入力された値をstateの値として保持する
 */

var Calculator = function (_React$Component2) {
  _inherits(Calculator, _React$Component2);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this2 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this2.handleCelsuisChange = _this2.handleCelsuisChange.bind(_this2);
    _this2.handleFahrenheitChange = _this2.handleFahrenheitChange.bind(_this2);
    _this2.state = { temperature: "", scale: "c" };
    return _this2;
  }

  _createClass(Calculator, [{
    key: "handleCelsuisChange",
    value: function handleCelsuisChange(temperature) {
      this.setState({ scale: "c", temperature: temperature });
    }
  }, {
    key: "handleFahrenheitChange",
    value: function handleFahrenheitChange(temperature) {
      this.setState({ scale: "f", temperature: temperature });
    }
  }, {
    key: "render",
    value: function render() {
      var scale = this.state.scale;
      var temperature = this.state.temperature;
      var celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
      var fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

      return React.createElement(
        "div",
        null,
        React.createElement(TemperatureInput, {
          scale: "c",
          temperature: celsius,
          onTemperatureChange: this.handleCelsuisChange
        }),
        React.createElement(TemperatureInput, {
          scale: "f",
          temperature: fahrenheit,
          onTemperatureChange: this.handleFahrenheitChange
        }),
        React.createElement(BoilingVerdict, { celsius: parseFloat(celsius) })
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("boil"));