const destination = document.querySelector("#container");

class Display extends React.Component {
  render() {
    const { color, num, size } = this.props;
    return (
      <div>
        <p>{color}</p>
        <p>{num}</p>
        <p>{size}</p>
      </div>
    );
  }
}
class Label extends React.Component {
  render() {
    return <Display {...this.props} />;
  }
}
class Shirt extends React.Component {
  render() {
    return (
      <div>
        <Label {...this.props} />
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <Shirt color="#ffe0e0" num="3" size="medium" />
  </div>,
  destination
);
