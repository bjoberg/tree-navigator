import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TreeItem, TreeView } from "@material-ui/lab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import shortid from "shortid";

import TreeStyles from "./tree.styles";

const useStyles = makeStyles(TreeStyles);

const Tree = props => {
  const classes = useStyles();
  const { data } = props;

  /**
   * Get a tree representation of node and all of it's children.
   * @param {*} name name of the tree item to be displayed
   * @param {*} type type of the tree item to be displayed
   * @param {*} contents of the current tree items directory tree
   * @returns {function} React element representing a single node and all of it's children
   */
  const getTree = (name = "", type = "", contents = []) => {
    const id = shortid.generate();
    if (contents === undefined || contents.length <= 0)
      return <TreeItem id={id} key={id} nodeId={id} label={name} />;
    return (
      <TreeItem id={id} key={id} nodeId={id} label={name}>
        {contents.map(el => getTree(el.name, el.type, el.contents))}
      </TreeItem>
    );
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {data.map(el => getTree(el.name, el.type, el.contents))}
    </TreeView>
  );
};

Tree.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      contents: PropTypes.array
    })
  )
};

Tree.defaultProps = {
  data: []
};

export default Tree;
