import React from "react";
import UseStore from "./../hooks/useStore";
import "../components/SideNav.css";
const ThemePlay = () => {
  const store = UseStore().tasks;
  const { theme } = store;
  return (
    <div
      style={{
        minWidth: "100rem",
        minHeight: "100vh",
        backgroundColor: theme.backGround,
        textAlign: "center",
        paddingTop: "7rem",
      }}
    >
      <h3 style={{ color: theme.headLines }}>header</h3>
      <p style={{ color: theme.font }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo odit,
        nobis ipsa sed fugit voluptatum? Officiis natus velit quia eos.
      </p>

      <div
        className="side"
        style={{
          minWidth: "15rem",
          marginTop: "2rem",
          minHeight: "7rem",
          backgroundColor: theme.main,
          borderRadius: "1rem",
          display: "flex",
        }}
      >
        <div className="" style={{ margin: "auto" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint impedit
          non, libero deserunt praesentium sed!
        </div>
      </div>
    </div>
  );
};

export default ThemePlay;
