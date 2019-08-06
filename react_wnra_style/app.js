const destination = document.querySelector("#container");
class Letter extends React.Component {
  render() {
    const { bgColor, children } = this.props;
    const letterStyle = {
      padding: 1 + "rem",
      margin: 1 + "rem",
      backgroundColor: bgColor ? bgColor : "#f1f1f1",
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 2 + "rem",
      textAlign: "center"
    };
    return <div style={letterStyle}>{children}</div>;
  }
}

ReactDOM.render(
  <div>
    <Letter bgColor="#58b3ff">A</Letter>
    <Letter bgColor="#58b3ff">B</Letter>
    <Letter>C</Letter>
    <Letter bgColor="#58b3ff">D</Letter>
    <Letter>E</Letter>
  </div>,
  destination
);
