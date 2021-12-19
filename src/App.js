import React, { Component } from "react";

// const App = () => {
//   return (
//     <>
//       <label htmlFor="bat">bar</label>
//       <input
//         type="text"
//         onChange={() => {
//           console.log("I was changed");
//         }}
//       />
//     </>
//   );
// };

class App extends Component {
  render() {
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
  }
}

export default App;
