import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should render a box", function() {
  const { asFragment, queryByText, getByLabelText, getByText, queryByAttribute } = render(<BoxList />);
  
  // make sure no boxes start on screen
  expect(queryByText('X')).not.toBeInTheDocument();

  //grab inputs
  const widthInput = getByLabelText("Box Width");
  const heightInput = getByLabelText("Box Height");
  const colorInput = getByLabelText("Box Color");
  const submitButton = getByText("Submit");

  // fill out form and submit
  fireEvent.change(widthInput, { target: { value: "20px" }});
  fireEvent.change(heightInput, { target: { value: "20px" }});
  fireEvent.change(colorInput, { target: { value: "blue" }});
  fireEvent.submit(submitButton);

  // test!
  expect(queryByText('X')).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

it("should be able to remove a box", function() {
  const { asFragment, queryByText, getByLabelText, getByText, queryByAttribute } = render(<BoxList />);

  //grab inputs
  const widthInput = getByLabelText("Box Width");
  const heightInput = getByLabelText("Box Height");
  const colorInput = getByLabelText("Box Color");
  const submitButton = getByText("Submit");

  // fill out form and submit
  fireEvent.change(widthInput, { target: { value: "20px" }});
  fireEvent.change(heightInput, { target: { value: "20px" }});
  fireEvent.change(colorInput, { target: { value: "blue" }});
  fireEvent.submit(submitButton);

  // make sure box is there
  expect(queryByText('X')).toBeInTheDocument();
  
  // grab remove button and fire
  const removeButton = getByText("X");
  fireEvent.click(removeButton);
  
  // test!
  expect(queryByText('X')).not.toBeInTheDocument();

});