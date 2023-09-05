import { NavLink, Route, Routes } from "react-router-dom";
import GlobalStyle from "./component/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Example from "./pages/Example";
import Example2 from "./pages/Example2";
import Example3 from "./pages/Example3";



function App() {
  return (
    <>
    <GlobalStyle />
    <ul>
      <li><NavLink to="/">홈</NavLink></li>
      <li><NavLink to="/detail">디테일</NavLink></li>
    </ul>
    <Routes>
      {/* <Route path="/" element={<Main/>}></Route> */}
      <Route path="/example" element={<Example/>}></Route>
      <Route path="/" element={<Example2/>}></Route>
      <Route path="/example3" element={<Example3/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
    </Routes>
    </>
  );
}

export default App;
