import React from "react";
import { shallow } from "enzyme";

import ApiTest from "../api-test";

describe("<ApiTest />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ApiTest />);
    });

    test("renders without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    test("renders an API response message element", () => {
        const responseMessage = wrapper.find(".response-message");
        expect(responseMessage.exists()).toBeTruthy();
    });

    describe("calls external API and displays the correct info to the user", () => {
        test("renders correct response message when response is yes", () => {
            const responseMessage = wrapper.find(".response-message");
            expect(responseMessage.text()).toBe("yes");
            expect(responseMessage.hasClass("valid")).toBeTruthy();
        });

        test("renders correct response message when response is no", () => {
            const responseMessage = wrapper.find(".response-message");
            expect(responseMessage.text()).toBe("no");
            expect(responseMessage.hasClass("error")).toBeTruthy();
        });
    });
});
