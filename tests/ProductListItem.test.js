import React from "react";
import renderer from "react-test-renderer";
import ProductListItem from "../src/components/ProductList/ProductListItem";

const getProducts = () => {
  axios
    .get("/products")
    .then((response) => {
      console.log(response.data);
      setProductList(response.data);
    })
    .catch((err) => {
      if (err.response.status === 404) {
        return;
      } else {
        console.log("error in axios GET", err);
      }
    });
};

const product = {
    id: 5,
    name: "Balls",
    quantity: 2,
    unit: "balls",
    isPurchased: false,
}

test("Renders Product Item", () => {
  const tree = renderer.create(<ProductListItem product={product} getProducts={getProducts}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
