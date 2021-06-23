import "./App.css";
import React, { Component } from "react";
// import Footer from "./components/Footer/footer";
// import TopBar from "./components/TopBar/topbar";
import PlaceGrid from "./components/PlaceGrid/placegrid";
import PureComponent from "./components/PureComponent/pure_component";
const product = (preview, name, brand, price) => {
  return (
    <div className="product">
      <img class="main-preview" src={preview} alt={preview} />
      <h4>{name}</h4>
      <h4>{brand}</h4>
      <h5>Rs. {price}</h5>
    </div>
  );
};

class App extends Component {
  state = {
    loaded: false,
    cloths: [],
  };

  componentDidMount() {
    // fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    //   .then((res) => res.json())
    //   .then((fetchData) => {
    //     this.setState({
    //       cloths: fetchData,
    //       loaded: true,
    //     });
    //     console.log(this.state.cloths);
    //     return fetchData;
    //   });
  }

  storeComponent = () =>{
    return (<div>
        <h1 className="sectionTitle">Clothing for Men and Women</h1>
        <div className="productRow">
          {this.state.cloths
            .filter((item) => !item.isAccessory)
            .map(({ preview, name, brand, price }) => {
              return product(preview, name, brand, price);
            })}
        </div>
        <h1 className="sectionTitle">Accessories for Men and Women</h1>
        <div className="productRow">
          {this.state.cloths
            .filter((item) => item.isAccessory)
            .map(({ preview, name, brand, price }) => {
              return product(preview, name, brand, price);
            })}
        </div>
      </div>)
  }

  render() {
    return (
      <div className="App">
        {/* <PureComponent></PureComponent> */}
        {/* <TopBar></TopBar> */}
        <PlaceGrid></PlaceGrid>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
