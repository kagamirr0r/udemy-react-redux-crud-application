import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10,
    },
    {
      name: "Hanako",
      age: 12,
    },
    {
      name: "No Age",
    },
  ];
  return profiles.map((profile, index) => {
    return <User name={profile.name} age={profile.age} key={index} />;
  });
};

const User = (props) => {
  return (
    <div>
      Hi. I'm {props.name}, and {props.age} years old
    </div>
  );
};

User.defaultProps = {
  age: 3,
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
