import { NavLink, Route, Routes } from "react-router-dom";
import GlobalStyle from "./component/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Example from "./pages/Example";
import Example2 from "./pages/Example2";
import Example3 from "./pages/Example3";
import Example4 from "./pages/Example4";
import Datepicker from "./pages/Datepicker";
//import { ThemeProvider } from "styled-components";

function App() {

  const light = {
    colors : {
      Primary : "#fff8ef",
      Secondary : "#102C57",
      BgColor : "#e9f1f6"
    }
  }
  return (
    <>
    <GlobalStyle />
    <ul>
      <li><NavLink to="/">홈</NavLink></li>
      <li><NavLink to="/detail">디테일</NavLink></li>
    </ul>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/ex" element={<Example/>}></Route>
      <Route path="/ex2" element={<Example2/>}></Route>
      <Route path="/ex3" element={<Example3/>}></Route>
      <Route path="/ex4" element={<Example4/>}></Route>
      <Route path="/date" element={<Datepicker/>}></Route>
      <Route path="/detail/:seq" element={<Detail/>}></Route>
    </Routes>
    </>
  );
}

export default App;
