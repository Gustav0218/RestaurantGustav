import { BrowserRouter,  Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/pages/container";
import Home from "./Components/pages/home";
import NoPage from "./Components/pages/noPage";
import Form from "./Components/pages/form";
import Adress from "./Components/pages/adress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={< Home />}></Route>
          <Route path = "*" element ={<NoPage />}></Route>
          <Route path = "contactanos" element={<Form />}></Route>
          <Route path = "direccion" element={<Adress />}></Route>
         </Route>
      </Routes>
    </BrowserRouter>
  );
  
}
export default App;