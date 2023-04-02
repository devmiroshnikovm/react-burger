//cpc

import React, { PureComponent } from "react";
class Ccomponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      status: false,
    });
    //console.log(this.props);
    //console.log(this.props.children);
    console.log(this);
  }

  render() {
    return (
      <div>
        Ccomponent {this.props.name} + {this.state.status ? "true" : "false"}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default Ccomponent;
