import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tree } from "antd";
import clsx from "clsx";

import DirectoryStyles from "./directory.styles";

const useStyles = makeStyles(DirectoryStyles);
const { TreeNode } = Tree;

const Directory = props => {
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
      if (contents === undefined || contents.length <= 0)
        return (
          <TreeNode
            id={name}
            key={name}
            title={name}
            className={clsx(name.includes(searchQuery) && classes.highlight)}
          />
        );
      return (
        <TreeNode id={name} key={name} title={name}>
          {contents.map(el => getTree(el.name, el.type, el.contents))}
        </TreeNode>
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

  if (nodes === undefined || nodes.length <= 0) {
    return <div>Loading...</div>;
  }
  return (
    <Tree className={classes.root} defaultExpandAll>
      {nodes}
    </Tree>
  );
};

Directory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      contents: PropTypes.array
    })
  ),
  searchQuery: PropTypes.string
};

Directory.defaultProps = {
  data: [],
  searchQuery: ""
};

export default Directory;
