import React, { Component } from "react";
import { Fragment } from "react";
class PureCompoment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 1,
        item: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ item: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Keyword:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="Submit"></input>
          </label>
        </form>
        <Child item={this.state.item}></Child>
      </Fragment>
    );
  }
}

class Child extends PureCompoment {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        console.log("item",this.props.item)
        return (  
            <h1>
                {this.props.item}
            </h1>
        );
    }
}
 


export default PureCompoment;
