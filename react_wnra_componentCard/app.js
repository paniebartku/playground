const destination = document.querySelector("#container");
class Card extends React.Component {
  render() {
    const { color } = this.props;
    const cardStyle = {
      height: 30 + "vh",
      width: 20 + "vw",
      padding: 0,
      boxShadow: "0 0 5px #666"
    };
    return (
      <div style={cardStyle}>
        <Square color={color} />
        <Label color={color} />
      </div>
    );
  }
}
class Square extends React.Component {
  render() {
    const { color } = this.props;
    const squareStyle = {
      height: 20 + "vh",
      backgroundColor: color
    };
    return <div style={squareStyle} />;
  }
}

class Label extends React.Component {
  render() {
    const { color } = this.props;
    const labelStyle = {
      fontFamily: "monospace",
      fontWeight: "bold",
      padding: 1 + "rem",
      margin: 0
    };
    return <p style={labelStyle}>{color}</p>;
  }
}

ReactDOM.render(
  <div>
    <Card color="#ffe0e0" />
  </div>,
  destination
);
