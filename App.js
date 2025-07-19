/*
  <div id = "parent">
      <div id = "child1">
          <h1> I am a h1 tag</h1>
          <h2> I am a h2 tag</h2>
      </div>
      <div id = "child2">
          <h1> I am a h1 tag</h1>
          <h2> I am a h2 tag</h2>
      </div>
  </div>

// ******* React.createElement is a object basically not a html tag. the convertion of object to html tag and render it into DOM is work of React .

  // now we implement it using react below
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {},  "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);
// this above type of thing is so complex , for example we have to make many nested tags , we can't use this format createElement and do like this , it looks complex, so for this we will usse ****JSX**** . 

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "hello" },
//   "Hello Pulkit From React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
