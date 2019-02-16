import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
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

      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/locations" component={Locations} />
      <Route path="/catering" component={Catering} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Menu = () => (
  <div>
    <h2>Menu</h2>
  </div>
);

const OurStory = ({ match }) => (
  <div>
    <h2>Locations</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:locationId`} component={Locations} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a location.</h3>}
    />
  </div>
);

const Locations = ({ match }) => (
  <div>
    <h3>{match.params.locationId}</h3>
  </div>
);

const Catering = () => (
  <div>
    <h2>Catering</h2>
  </div>
);

export default BasicExample;