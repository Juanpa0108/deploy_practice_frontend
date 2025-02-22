import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "../view/Register";
import Login from "../view/Login";
import Catalog from "../view/Catalog";


export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog/:name?" element={<Catalog/>}/>
      </Routes>
    </BrowserRouter>
  );
};


