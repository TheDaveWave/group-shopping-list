import React from "react";
import { act as domAct } from "react-dom/test-utils";
import { create, act as testAct } from "react-test-renderer";
import App from "../src/components/App/App";
import { unmountComponentAtNode } from "react-dom";

describe("Renders App", () => {
  /* let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }); */
  /* test("Snapple", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  }); */
  test("Run through app", () => {
    const fakeProducts = [
      {
        id: 1,
        name: "Balls",
        quantity: 2,
        unit: "balls",
        isPurchased: false,
      },
      {
        id: 2,
        name: "Sllab",
        quantity: 2,
        unit: "sllab",
        isPurchased: false,
      },
    ];

    /* jest.spyOn(global, "getProducts").mockImplementation(() => {
      Promise.resolve(() => {
        json: () => Promise.resolve(fakeProducts);
      });
    }); */

    let root;
    domAct(async () => {
      await testAct(() => {
        root = create(<App />);
      });
    });
    expect(root).toMatchSnapshot();
  });
});
