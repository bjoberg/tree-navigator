import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import SearchStyles from "./search.styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(SearchStyles);

const Search = props => {
  const classes = useStyles();
  const { value, handleOnChange } = props;

  return (
    <TextField
      id="search-textfield"
      label="Search"
      className={classes.textField}
      value={value}
      onChange={e => handleOnChange(e)}
      margin="normal"
      variant="outlined"
    />
  );
};

Search.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func
};

Search.defaultProps = {
  value: "",
  handleOnChange: () => {}
};

export default Search;
