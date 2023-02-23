import React from "react";
import './Css/style.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import objs from "./Data/objs";
import Home from "./Comp/Home";
import Orders from "./Comp/Orders";
import Products from "./Comp/Products";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/ShoesStore-Redux" element={<Home/>} />
          <Route path="/ShoesStore-Redux/Products" element={<Products objs={objs}/>} />
          <Route path="/ShoesStore-Redux/Orders" element={<Orders objs={objs}/>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;