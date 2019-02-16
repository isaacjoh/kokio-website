import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box } from "grommet";
import "./footer.scss"

import Menu from "../Menu/menu"
import OurStory from "../OurStory/ourStory"
import Locations from "../Locations/locations"
import Catering from "../Catering/catering"

const Footer = () => (
  <Router>
    <div className="footer">
      <Box
        tag='footer'
        direction='row'
        justify='between'
        pad='medium'
        border={{ side: 'top' }}
        gap='small'
        flex={false}
      >
        <ul>
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
      </Box>

      <Route path="/menu" component={Menu} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/locations" component={Locations} />
      <Route path="/catering" component={Catering} />
    </div>
  </Router>
);

export default Footer