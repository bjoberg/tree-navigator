import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import SearchStyles from "./search.styles";
import { Input } from "antd";

const useStyles = makeStyles(SearchStyles);

const Search = props => {
  const classes = useStyles();
  const { value, handleOnChange } = props;

  return (
    <Input
      id="search-textfield"
      className={classes.textField}
      value={value}
      onChange={e => handleOnChange(e)}
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
