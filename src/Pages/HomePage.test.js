import React from "react";
import { mount } from "enzyme";
import HomePage from "./HomePage";
import { findByAtrr } from "../Utils/testUtils";
  
let wrapper;
beforeEach(() => {
  wrapper = mount(<HomePage/>);
})


describe("HomePage renders", () => {
 
  test("HomePage component renders", () => {
    let component = findByAtrr(wrapper, "component-wrapper");
    expect(component.length).toBe(1);
  });
});
describe('Infinite Scroll Component', () => {
    test("InfiniteScroll component renders", () => {
      let component = findByAtrr(wrapper, "component-Infinite");
        expect(component.length).not.toBeNull();
    });
      test("InfiniteScroll component to Match Snapshot", () => {
          let component = findByAtrr(wrapper, "component-Infinite");
          expect(component).toMatchSnapshot();  
      });
  });
