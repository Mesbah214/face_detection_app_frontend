import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
//import Particles from "react-particles-js";

// const particleOptions = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Particles className="particles" params={particleOptions} /> */}
        <div className="topBar">
          <Logo />
          <Navigation />
        </div>
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}
export default App;
