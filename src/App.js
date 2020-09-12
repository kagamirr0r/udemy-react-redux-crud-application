import React from "react";

// class App extend Component{
//   render(){
//     return(
//       <>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         onChange={() => {
//           console.log("I am clicked");
//         }}
//       />
//     </>
//     )
//   }
// }

// function App() {
//   return (
//     <>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         onChange={() => {
//           console.log("I am clicked");
//         }}
//       />
//     </>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

// function App() {
//   return React.createElement("div", null, "Hello World!!");
// }

export default App;
