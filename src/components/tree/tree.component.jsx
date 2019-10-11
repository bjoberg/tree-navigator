import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TreeItem, TreeView } from "@material-ui/lab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import shortid from "shortid";

import TreeStyles from "./tree.styles";

const useStyles = makeStyles(TreeStyles);

const Tree = props => {
  const classes = useStyles();
  const { data, searchQuery } = props;
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    /**
     * Get a tree representation of node and all of it's children.
     * @param {String} name name of the tree item to be displayed
     * @param {String} type type of the tree item to be displayed
     * @param {Array} contents of the current tree items directory tree
     * @returns {function} React element representing a single node and all of it's children
     */
    const getTree = (name = "", type = "", contents = [], query = "") => {
      const id = shortid.generate();
      if (contents === undefined || contents.length <= 0)
        return (
          <TreeItem
            id={id}
            key={id}
            nodeId={"1"}
            label={name}
            className={clsx(name.includes(searchQuery) && classes.highlight)}
          />
        );
      return (
        <TreeItem id={id} key={id} nodeId={"1"} label={name}>
          {contents.map(el => getTree(el.name, el.type, el.contents))}
        </TreeItem>
      );
    };

    /**
     * Traverse the provided input and set the nodes based on the traversal
     * @param {Array} input array of nodes to traverse
     */
    const traverseData = (input, query) => {
      const temp = [];
      input.forEach(el =>
        temp.push(getTree(el.name, el.type, el.contents, query))
      );
      setNodes(temp);
    };

    traverseData(data, searchQuery);
  }, [classes.highlight, data, searchQuery]);

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={["1"]}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {nodes}
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
  ),
  searchQuery: PropTypes.string
};

Tree.defaultProps = {
  data: [],
  searchQuery: ""
};

export default Tree;
