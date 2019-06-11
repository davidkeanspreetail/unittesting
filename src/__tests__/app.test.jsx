import React from "react";
import { shallow } from "enzyme";

import App from "../app";

describe("<App />", () => {
    let username;
    let wrapper;

    beforeEach(() => {
        username = "Spreetail-Code-Monkey";
        wrapper = shallow(<App username={username} />);
    });

    test("renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    });

    test("renders the title element", () => {
        const titleElement = wrapper.find(".title");
        expect(titleElement.exists()).toBeTruthy();
    });

    test("renders the username name element and the username text is as expected", () => {
        const usernameElement = wrapper.find(".username");
        expect(usernameElement.exists()).toBeTruthy();
        expect(usernameElement.text()).toBe(username);
    });
});
