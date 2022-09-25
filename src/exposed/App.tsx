import React from "react";
import { render } from "react-dom";
import App from "../App";

export default function RenderApp(el: string) {
  render(<App />, document.getElementById(el));
}
