import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import About from "./pages/About.js";
import Materials from "./pages/Materials.js";
import Product1 from "./pages/Product1.js";
import Product2 from "./pages/Product2.js";
import Product3 from "./pages/Product3.js";
import TrackOrder from "./pages/TrackOrder.js";
import NewMaterials from "./pages/NewMaterials.js";

function App() {
  const [apiConnect, setApiConnect] = React.useState("initial");
  const [err, setErr] = React.useState({});
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  async function TestBackend() {
    console.log("here");
    const res = await fetch("/test");
    res
      .text()
      .then((res) => {
        console.log("res:", res);
        setApiConnect(res);
      })
      .catch((err) => {
        setErr(err);
      });
  }
  React.useEffect(() => {
    TestBackend();
    // window.addEventListener("scroll", handleScroll, { passive: true });

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar position={scrollPosition} className="navbar-app" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Product" exact component={Product} />
          <Route path="/Product-1" exact component={Product1} />
          <Route path="/Product-2" exact component={Product2} />
          <Route path="/Product-3" exact component={Product3} />
          <Route path="/About" exact component={About} />
          <Route path="/trackorder" exact component={TrackOrder} />
          <Route path="/Materials" exact component={NewMaterials} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
