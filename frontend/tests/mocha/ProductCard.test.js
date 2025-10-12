// tests/mocha/ProductCard.test.js

import "jsdom-global/register"; // sets up global document/window
import { expect } from "chai";
import React from "react";
import { createElement } from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../components/ProductCard.js";

describe("ProductCard", () => {
  it("renders product name and price", () => {
    const product = { name: "Test", description: "desc", price: 9.99, id: 1 };

    render(createElement(ProductCard, { product }));

    // Using screen API
    expect(screen.getByText("Test")).to.exist;
    expect(screen.getByText("$9.99")).to.exist;
  });
});
