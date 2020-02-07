import React from "react";
import { useHistory } from "react-router-dom";

const About: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>about page</h1>
      <button
        onClick={() => {
          history.push("/hello", { id: 15 });
        }}
      >
        click me{" "}
      </button>
    </div>
  );
};

export default About;
