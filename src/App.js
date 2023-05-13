import "./App.css";
import { LoadingComp, LoginComp, ProfileComp } from "./components";
// import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="App centered-div">
      {/* <Routes>
        <Route path="/" element={<LoginComp/>}></Route>
        <Route path="/profile" element={<ProfileComp/>}></Route>
      </Routes> */}
      {isLoading ? (
        <LoadingComp />
      ) : !isAuthenticated ? (
        <LoginComp />
      ) : (
        <ProfileComp />
      )}
    </div>
  );
}

export default App;
