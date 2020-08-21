import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input, { InputProps } from "./Input";
import "core-js/stable";

Enzyme.configure({ adapter: new Adapter() });

describe("<Input />", () => {
  const testingProps: InputProps = {
    label: "some label",
    inputValue: "some value",
    validationRules: [
      {
        hint: "will fail",
        validateFunc: (input: string) => input.length === 0,
      },
      {
        hint: "will success",
        validateFunc: (input: string) => input.length > 0,
      },
      { validateFunc: (input: string) => true },
    ],
  };

  interface SpanProps {
    children: string;
    style: {
      [color: string]: string;
    };
  }

  it("renders one <label /> component, one input component", () => {
    const wrapper = shallow(<Input {...testingProps} />);
    expect(wrapper.find("label").length).toEqual(1);
    expect(wrapper.find("label").text()).toEqual(testingProps.label);
    expect(wrapper.find("input").length).toEqual(1);
    expect(wrapper.find("input").prop("value")).toEqual(
      testingProps.inputValue
    );
  });

  it("renders X <span/> component if given X validation rules with hint", () => {
    const wrapper = shallow(<Input {...testingProps} />);
    expect(wrapper.find("span").length).toEqual(2);

    const failedSpanProps = wrapper.find("span").get(0).props as SpanProps;
    const successSpanProps = wrapper.find("span").get(1).props as SpanProps;
    expect(failedSpanProps.children).toEqual("will fail");
    expect(failedSpanProps.style.color).toEqual("#FF6363");
    expect(successSpanProps.style.color).toEqual("#76BC7E");
    expect(successSpanProps.children).toEqual("will success");
  });
});
