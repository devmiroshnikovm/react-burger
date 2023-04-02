//cpc

import React, { PureComponent } from "react";
class CcomponentWithoutConstructor extends PureComponent {
  handleClick = () => {
    console.log(this);
  };

  render() {
    return (
      <div>
        CcomponentWithoutConstructor
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default CcomponentWithoutConstructor;
