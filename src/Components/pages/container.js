import { Outlet } from "react-router-dom";
import Header from "../shared/header";
import Body from "../shared/body";
import Footer from "../shared/footer";
const Container = () => {
  return (
    <> <div className="container">
      <Header />
      <Outlet />
      <Footer />
      </div>
    </>
  );
};

export default Container;
