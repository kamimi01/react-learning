function ListItems(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  // keyはmap呼び出しの中で必要！
  const listItems = numbers.map((number) => (
    <ListItems key={number.toString()} value={number} />
  ));

  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("numbers")
);
