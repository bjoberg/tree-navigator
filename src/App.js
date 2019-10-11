import React, { Fragment } from "react";
import Tree from "./components/tree/tree.component";

import { listing } from "./data/listing";

function App() {
  return (
    <Fragment>
      <Tree data={listing} />
    </Fragment>
  );
}

export default App;
