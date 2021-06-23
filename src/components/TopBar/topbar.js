import React from "react";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    console.log("I'm constructor");
  }

  componentDidCatch() {
    console.log("I'm componentDidCatch");
  }
  componentDidUpdate() {
    console.log("I'm ccomponentDidUpdate");
  }
  componentDidMount() {
    console.log("I'm componentDidMount");
  }

  shouldComponentUpdate(){
    console.log("I'm shouldComponentUpdate");
    if(this.state.number<5)
      return true
    return false
  }

  render() {
    console.log("I'm render");
    return (
      <div style={{ justifyContent: "center" }}>
        <h1>{this.state.number}</h1>
        <br></br>
        <div>
          <button
            onClick={() => {
              if (this.state.number > 0)
                this.setState({
                  number: this.state.number - 1,
                });
            }}
          >
            Minus
          </button>
          <button
            onClick={() => {
              this.setState({
                number:
                  this.state.number < 10
                    ? this.state.number + 1
                    : this.state.number,
              });
            }}
          >
            Plus
          </button>
        </div>
      </div>
    );
  }
}

export default TopBar;
