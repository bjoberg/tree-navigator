import React, { Fragment, useState } from "react";
import Directory from "./components/directory/directory.component";

import { listing } from "./data/listing";
import Search from "./components/search/search.component";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Update the search query based on event input
   * @param {function} e event that triggering the function call
   */
  const handleTextFieldChange = e => setSearchQuery(e.target.value);

  return (
    <Fragment>
      <Search value={searchQuery} handleOnChange={handleTextFieldChange} />
      <Directory data={listing} searchQuery={searchQuery} />
    </Fragment>
  );
}

export default App;
