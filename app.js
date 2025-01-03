import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello world!");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const root = createRoot(document.getElementById("root"));
root.render(parent);
