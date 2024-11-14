import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // });
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  // const { userData } = useContext(AuthContext);
  // console.log(data);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      //
      setUser("admin");
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setLoggedInUserData(employee);
        // console.log("this is an employee");
        setUser("employee");
      }
    } else {
      alert("Invalid Credentials");
    }
  };
  // handleLogin("employee@me.com", "123");

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}></Login> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser}></AdminDashboard>
      ) : user == "employee" ? (
        <EmployeeDashboard
          changeUser={setUser}
          loggedInUserData={loggedInUserData}
        ></EmployeeDashboard>
      ) : null}
    </>
  );
};
export default App;
