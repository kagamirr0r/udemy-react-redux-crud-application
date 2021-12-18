import React from "react";

const App = () => {
  const greeting = "Hello World";
  const dom1 = <h1>Hi!</h1>;
  const dom2 = <h1 className="foo">{greeting}</h1>;
  // return dom2;

  // return (
  //   <input
  //     type="text"
  //     onClicked={() => {
  //       console.log("I was clicked");
  //     }}
  //   />
  // );

  return (
    <>
      <label htmlFor="bat">bar</label>
      <input
        type="text"
        onChange={() => {
          console.log("I was changed");
        }}
      />
    </>
  );
};

export default App;
