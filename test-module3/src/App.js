import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.css';
import HomeComponent from "./Components/HomeComponent";
import {Route, Routes} from "react-router-dom";
import ListComponent from "./Components/ListComponent";

function App() {
  return (
      <>
        <HeaderComponent/>
          <Routes>
              <Route path={'/home'} element={<HomeComponent/>}></Route>
              <Route path={'/products'} element={<ListComponent/>}></Route>
          </Routes>
      </>
  );
}

export default App;
