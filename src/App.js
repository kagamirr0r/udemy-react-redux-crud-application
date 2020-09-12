import React from "react";

function App() {
  const greeting = "Hi!!Kagami";
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        onChange={() => {
          console.log("I am clicked");
        }}
      />
    </>
  );
}

// function App() {
//   return React.createElement("div", null, "Hello World!!");
// }

export default App;
