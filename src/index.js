import React from "react";
import { render } from "react-dom";
import Header from "./Header";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Header name="Nettsiden" />
  </div>
);

render(<App />, document.getElementById("root"));
