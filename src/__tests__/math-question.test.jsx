import React from "react";
import { shallow } from "enzyme";

import MathQuestion from "../math-question";

describe("<MathQuestion />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MathQuestion />);
    });

    test("renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    });

    test("renders an input box", () => {
        const inputBox = wrapper.find("#math-input");
        expect(inputBox.exists()).toBeTruthy();
    });

    test("renders a submit button with the correct text", () => {
        const button = wrapper.find("button");
        expect(button.exists()).toBeTruthy();
        expect(button.text()).toBe("Submit");
    });

    test("renders a validation message element", () => {
        const validationMessage = wrapper.find(".validation-message");
        expect(validationMessage.exists()).toBeTruthy();
    });

    describe("validates user input on submit and displays appropriate messaging", () => {
        test("renders correct validation messaging when correct input is submitted", () => {
            const inputBox = wrapper.find("#math-input");
            const validationMessage = wrapper.find(".validation-message");
            expect(validationMessage.hasClass("valid")).toBeTruthy();
            expect(validationMessage.text()).toBe("Correct!");
            expect(inputBox.prop("value")).toBe("");
        });

        test("renders error validation messaging when incorrect input is submitted", () => {
            const inputBox = wrapper.find("#math-input");
            const validationMessage = wrapper.find(".validation-message");
            expect(validationMessage.hasClass("error")).toBeTruthy();
            expect(validationMessage.text()).toBe("Incorrect!");
            expect(inputBox.prop("value")).toBe("");
        });
    });
});
