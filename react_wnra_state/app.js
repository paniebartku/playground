const destination = document.querySelector("#container");

class LightingCounter extends React.Component {
  state = {
    strikes: 0
  };

  timer = () => {
    this.setState({
      strikes: this.state.strikes + 100
    });
    console.log(this.state.strikes);
  };

  componentDidMount() {
    setInterval(this.timer, 1000);
  }
  render() {
    const { strikes } = this.state;
    return (
      <div>
        <h2>{strikes}</h2>
      </div>
    );
  }
}

class LightingCounterDisplay extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <LightingCounter />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <LightingCounterDisplay />
  </div>,
  destination
);
