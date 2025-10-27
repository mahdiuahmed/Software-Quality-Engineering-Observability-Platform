const { expect } = require("chai");
const React = require("react");
import { render, screen } from "@testing-library/react";
const ProductCard = require("../../components/ProductCard.js").default;

describe("ProductCard", () => {
  it("renders product name and price", () => {
    const product = { name: "Test", description: "desc", price: 9.99, id: 1 };

    render(React.createElement(ProductCard, product));

    expect(screen.getByText("Test")).to.exist;
    expect(screen.getByText("$9.99")).to.exist;
  });
});
