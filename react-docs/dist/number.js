function ListItems(props) {
  return React.createElement(
    "li",
    null,
    props.value
  );
}

function NumberList(props) {
  var numbers = props.numbers;
  // keyはmap呼び出しの中で必要！
  var listItems = numbers.map(function (number) {
    return React.createElement(ListItems, { key: number.toString(), value: number });
  });

  return React.createElement(
    "ul",
    null,
    listItems
  );
}

var numbers = [1, 2, 3, 4, 5];

ReactDOM.render(React.createElement(NumberList, { numbers: numbers }), document.getElementById("numbers"));