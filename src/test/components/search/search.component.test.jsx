import React from "react";
import { shallow } from "enzyme";

import Search from "../../../components/search/search.component";
import { Input } from "antd";

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
    it("should render exaclty 1 <Input /> component", () => {
      const expected = 1;
      const actual = wrapper.find(Input).length;
      expect(actual).toStrictEqual(expected);
    });

    it('should render <Input /> with correct "id" prop', () => {
      const expected = "search-textfield";
      const actual = wrapper.find(Input).prop("id");
      expect(actual).toStrictEqual(expected);
    });

    it("should render <Input /> with correct styles", () => {
      const expected = true;
      const actual = wrapper
        .find(Input)
        .hasClass(/(makeStyles)-(textField)-(\d+)/);
      expect(actual).toStrictEqual(expected);
    });

    it('should render <TextField /> with correct "value" prop', () => {
      const expected = value;
      const actual = wrapper.find(Input).prop("value");
      expect(actual).toStrictEqual(expected);
    });

    it("when <TextField /> changes, should call handleOnChange with correct params", () => {
      expect(handleOnChange.mock.calls.length).toStrictEqual(0);
      const e = { target: { value: "test" } };
      wrapper.find(Input).simulate("change", e);
      expect(handleOnChange.mock.calls.length).toStrictEqual(1);
      expect(handleOnChange.mock.calls[0][0]).toStrictEqual(e);
    });
  });
});
