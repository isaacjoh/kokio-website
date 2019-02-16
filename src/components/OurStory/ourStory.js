import React from "react";
import { Route, Link } from "react-router-dom";
import Locations from "../Locations/locations"

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

export default OurStory
