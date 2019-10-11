import React from "react";
import { shallow } from "enzyme";
import { TreeView } from "@material-ui/lab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Tree from "../../components/tree/tree.component";
import { listing } from "../__mocks__/listing";

describe("[Tree]", () => {
  let wrapper;
  const mockData = listing;
  const props = {
    data: mockData
  };

  beforeEach(() => {
    wrapper = shallow(<Tree {...props} />);
  });

  describe("[TreeView]", () => {
    it("should render exaclty 1 <TreeView /> component", () => {
      const expected = 1;
      const actual = wrapper.find(TreeView).length;
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TreeView /> with correct "defaultCollapseIcon" prop', () => {
      const expected = <ExpandMoreIcon />;
      const actual = wrapper.find(TreeView).prop("defaultCollapseIcon");
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TreeView /> with correct "defaultExpandIcon" prop', () => {
      const expected = <ChevronRightIcon />;
      const actual = wrapper.find(TreeView).prop("defaultExpandIcon");
      expect(actual).toStrictEqual(expected);
    });

    it("should render correct number of children", () => {
      const expected = mockData.length;
      const actual = wrapper.find(TreeView).children().length;
      expect(actual).toStrictEqual(expected);
    });
  });

  describe("[TreeItem]", () => {
    it("should render correct number of <TreeItem /> components", () => {
      const expected = false;
      const actual = true;
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TreeItem /> component with correct "id" prop', () => {
      const expected = false;
      const actual = true;
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TreeItem /> component with correct "key" prop', () => {
      const expected = false;
      const actual = true;
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TreeItem /> component with correct "nodeId" prop', () => {
      const expected = false;
      const actual = true;
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TreeItem /> component with correct "label" prop', () => {
      const expected = false;
      const actual = true;
      expect(actual).toStrictEqual(expected);
    });
  });
});
