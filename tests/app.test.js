import React from "react";
import renderer from "react-test-renderer";
import App from "../src/components/App/App";

// describe("Renders App", () => {

test("Renders App 2", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// });
