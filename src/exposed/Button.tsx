import React from "react";
import { render } from "react-dom";
import Button from "../Button";

export default function RenderButton(el: string) {
  render(<Button />, document.getElementById(el));
}
