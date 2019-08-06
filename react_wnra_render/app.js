class HelloWorld extends React.Component {
  render() {
    return <p>Elo, {this.props.helloTarget}</p>;
  }
}
class Button extends React.Component {
  render() {
    return (
      <div>
        <button type={this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <HelloWorld helloTarget="Tony Stark" />
    <HelloWorld helloTarget="Nicolas Cage" />
    <Button behavior="submit">send data</Button>
  </div>,
  document.querySelector("#container")
);
