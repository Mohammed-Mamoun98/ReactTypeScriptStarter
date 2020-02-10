import React from "react";
import { useSpring, animated as a } from "react-spring";
import "./styles.css";
import { Spring } from "react-spring/renderprops";

const Animated = (Props: any) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 100, delay: 0 }}
    >
      {props => <div style={props}>{Props.children}</div>}
    </Spring>
  );
};

const AnimationPG = (props: any) => {
  const [greetingStatus, displayGreeting] = React.useState(false);

  const contentProps = useSpring({
    // opacity: greetingStatus ? 1 : 0,
    width: greetingStatus ? "40%" : "0%",
    config: { duraion: 100 }
  });

  const AcontentProps = useSpring({
    from: {},
    to: { width: greetingStatus ? "20%" : "0%" },
    config: { delay: 0, duration: 1 }
  });
  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => displayGreeting(a => !a)} className="button">
          Click Here
        </button>
      </div>
      {!greetingStatus ? (
        <div className="Intro">Click button below</div>
      ) : (
        <a.div className="box" style={{ ...AcontentProps }}>
          <h1>Hey there ! React Spring is awesome.</h1>
        </a.div>
      )}

      <Animated>
        <h1>hello World</h1>
      </Animated>
    </div>
  );
};

export default AnimationPG;
