import React from "react";
import PropTypes from "prop-types";

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
  const profiles = [
    {
      name: "Taro",
      age: 10,
    },
    {
      name: "Hanako",
      age: 5,
    },
    {
      name: "Noname",
    },
  ];
  return (
    <>
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </>
  );
};

const User = (props) => {
  return (
    <div>
      I am {props.name}, and {props.age} years old.
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired, //ageがないとエラーになる
};

// function App() {
//   return React.createElement("div", null, "Hello World!!");
// }

export default App;
