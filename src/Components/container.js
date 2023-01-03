import { Outlet } from "react-router-dom";
const Container = () => {
  return (
    <>
      <h1>Container </h1>
      <Outlet />
    </>
  );
};

export default Container;
