import React from "react";
import UseStore from "./../hooks/useStore";
import "../components/SideNav.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../redux/actions/action";
const ThemePlay = () => {
  const dispatch = useDispatch();
  const store = UseStore().tasks;
  const { theme } = store;
  return (
    <div
      style={{
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
        <Button
          onClick={() => {
            dispatch(toggleDrawer());
          }}
        >
          toggle Drawe
        </Button>
      </div>
    </div>
  );
};

export default ThemePlay;
