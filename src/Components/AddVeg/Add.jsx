import React from "react";

class Addveg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { NameOfVeg: " ", arrayOfVeg: [] };
    this.TextStore = this.TextStore.bind(this);
    this.ClickButton = this.ClickButton.bind(this);
  }

  TextStore(event) {
    this.state.NameOfVeg = event.target.value;
  }
  ClickButton() {
    this.state.arrayOfVeg.push(this.state.NameOfVeg);
    this.setState({ NameOfVeg: this.state.NameOfVeg });
  }
  render() {
    return (
      <div className="addVegStyle">
        <h1>
          THIS COMPONENT IS TO BE USED TO ADD <strong>VEGETABLE</strong> TO THE
          STORE
        </h1>

        <input type="text" onChange={this.TextStore} />
        <button onClick={this.ClickButton}>Click Here</button>
        <p>{this.state.NameOfVeg}</p>
        <ul>
          {this.state.arrayOfVeg.map((veg) => {
            return <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Addveg;
