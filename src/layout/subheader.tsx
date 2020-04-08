import React from "react";
import { useLocation } from "react-router-dom";
import Navigator from "./../components/navigator/navigator";
import CustomSelect from "../components/customSelect";
import UseStore from "./../hooks/useStore";
import { setTheme } from "./../redux/actions/action";
import { useDispatch } from "react-redux";

const SubHeader = () => {
  const { pathname } = useLocation();
  const store = UseStore();
  const dispatch = useDispatch();
  return (
    <div>
      <Navigator path={pathname} />
      <div className="" style={{ minWidth: "5rem", maxWidth: "5rem" }}>
        <CustomSelect
          options={[
            { name: "dark", id: "1" },
            { name: "light", id: "2" },
          ]}
          onSelect={(value) => {
            console.log(value);
            dispatch(setTheme(value));
          }}
          value={store.tasks.selectedTheme}
        />
      </div>
    </div>
  );
};

export default SubHeader;
