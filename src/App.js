import React from "react";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from "./components/Menu/menu"
import OurStory from "./components/OurStory/ourStory"
import Locations from "./components/Locations/locations"
import Catering from "./components/Catering/catering"
import Footer from "./components/Footer/footer"

// font-family: 'Fjalla One', sans-serif;
// font-family: 'Average', serif;

const theme = {
  global: {
    font: {
      family: 'Fjalla One',
      size: '14px',
      height: '20px',
    },
  },
};

const BasicExample = () => (
  <Router>
    <Grommet theme={theme} full={true}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/our-story">Our Story</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/catering">Catering</Link>
          </li>
        </ul>

        <hr />

        <Footer />

        <Route path="/menu" component={Menu} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/locations" component={Locations} />
        <Route path="/catering" component={Catering} />
      </div>
    </Grommet>
  </Router>
);

// const Locations = ({ match }) => (
//   <div>
//     <h3>{match.params.locationId}</h3>
//   </div>
// );

export default BasicExample;