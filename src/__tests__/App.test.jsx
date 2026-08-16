import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("App renders without crashing", () => {
  // Mock fetch before rendering
  global.setFetchResponse(global.basePlants);
  render(<App />);
});

