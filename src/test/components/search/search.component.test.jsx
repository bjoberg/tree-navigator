import React from "react";
import { shallow } from "enzyme";

import Search from "../../../components/search/search.component";
import { TextField } from "@material-ui/core";

describe("[Search]", () => {
  let wrapper;
  let value;
  let handleOnChange;

  beforeEach(() => {
    value = "test value";
    handleOnChange = jest.fn();
    const props = {
      value,
      handleOnChange
    };
    wrapper = shallow(<Search {...props} />);
  });

  describe("[TreeView]", () => {
    it("should render exaclty 1 <TextField /> component", () => {
      const expected = 1;
      const actual = wrapper.find(TextField).length;
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TextField /> with correct "id" prop', () => {
      const expected = "search-textfield";
      const actual = wrapper.find(TextField).prop("id");
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TextField /> with correct "label" prop', () => {
      const expected = "Search";
      const actual = wrapper.find(TextField).prop("label");
      expect(actual).toStrictEqual(expected);
    });

    it("should render <TextField /> with correct styles", () => {
      const expected = true;
      const actual = wrapper
        .find(TextField)
        .hasClass(/(makeStyles)-(textField)-(\d+)/);
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TextField /> with correct "value" prop', () => {
      const expected = value;
      const actual = wrapper.find(TextField).prop("value");
      expect(actual).toStrictEqual(expected);
    });

    it("when <TextField /> changes, should call handleOnChange with correct params", () => {
      expect(handleOnChange.mock.calls.length).toStrictEqual(0);
      const e = { target: { value: "test" } };
      wrapper.find(TextField).simulate("change", e);
      expect(handleOnChange.mock.calls.length).toStrictEqual(1);
      expect(handleOnChange.mock.calls[0][0]).toStrictEqual(e);
    });

    it('should render <TextField /> with correct "margin" prop', () => {
      const expected = "normal";
      const actual = wrapper.find(TextField).prop("margin");
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TextField /> with correct "variant" prop', () => {
      const expected = "outlined";
      const actual = wrapper.find(TextField).prop("variant");
      expect(actual).toStrictEqual(expected);
    });
  });
});
