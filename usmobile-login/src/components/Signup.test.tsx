import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Signup, { validateInput } from "./Signup";
import "core-js/stable";
import Input, { InputProps } from "./UI/Input";
import Button from "./UI/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Input />", () => {
  it("renders 4 <Input /> components and 1 <input /> checkbox", () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find(Input).length).toEqual(4);
    expect(wrapper.find('input[type="checkbox"]').length).toEqual(1);
  });

  it("prevent user from submit if form is invalid or not agreed to terms", () => {
    const wrapper = mount(<Signup />);
    expect(wrapper.find(Button).prop("isDisabled")).toEqual(true);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: {
          value: "first name",
        },
      });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: {
          value: "last name",
        },
      });
    wrapper
      .find("input")
      .at(2)
      .simulate("change", {
        target: {
          value: "invalid gmail",
        },
      });
    wrapper
      .find("input")
      .at(3)
      .simulate("change", {
        target: {
          value: "val1dpassword",
        },
      });
    expect(wrapper.find(Button).prop("isDisabled")).toEqual(true);
    wrapper.find('input[type="checkbox"]').simulate("change", {
      target: {
        checked: true,
      },
    });
    expect(wrapper.find(Button).prop("isDisabled")).toEqual(true);
    wrapper
      .find("input")
      .at(2)
      .simulate("change", {
        target: {
          value: "valid@gmail.com",
        },
      });
    expect(wrapper.find(Button).prop("isDisabled")).toEqual(false);
    wrapper.find('input[type="checkbox"]').simulate("change", {
      target: {
        checked: false,
      },
    });
    expect(wrapper.find(Button).prop("isDisabled")).toEqual(true);
  });
});

describe("validateInput should validate input props", () => {
  let testInput: InputProps = {
    label: "First Name",
    type: "text",
    inputValue: "",
    placeholder: "First Name",
    name: "firstname",
  };
  expect(validateInput(testInput)).toEqual(false);
  testInput.inputValue = "some value";
  expect(validateInput(testInput)).toEqual(true);
  testInput.validationRules = [{ validateFunc: (input: string) => false }];
  expect(validateInput(testInput)).toEqual(false);
  testInput.validationRules = [{ validateFunc: (input: string) => true }];
  expect(validateInput(testInput)).toEqual(true);
});
