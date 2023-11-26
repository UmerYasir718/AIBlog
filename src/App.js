import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Canel from "./myComponets/Canel";
import DataLoader from "./myComponets/DataLoader";
import Login from "./myComponets/Login";
import Result from "./myComponets/Result";
import Success from "./myComponets/Success";
// import Form from "./myComponets/Form";
import Form2 from './myComponets/Form2';
// import Slider2 from './myComponets/Slider2';
// import Auth from './myComponets/Auth';
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Loading...</div>
        </header>
      </div>
    );
  }
  return (
    <>
      {isAuthenticated ? (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Form2 />} />
            <Route exact path="/post" element={<Result />} />
            <Route exact path="/postdata" element={<DataLoader />} />
            <Route exact path="/sucess" element={<Success />} />
            <Route exact path="/cancel" element={<Canel />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
