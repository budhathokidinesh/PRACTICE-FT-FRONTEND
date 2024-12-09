import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { DefaultLayout } from "./components/layout/DefaultLayout";
import DashBoard from "./Pages/DashBoard";
import Transaction from "./Pages/Transaction";
import { Auth } from "./auth/Auth";
import { useEffect } from "react";
import { autoLogin } from "../utils/users";
import { useUser } from "./context/UserContext";
function App() {
  const { user, setUser } = useUser();
  useEffect(() => {
    !user?._id && updateUser();
  }, [user?._id]);

  const updateUser = async () => {
    const user = await autoLogin();
    setUser(user);
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route
            path="dashboard"
            element={
              <Auth>
                <DashBoard />
              </Auth>
            }
          />
          <Route
            path="transaction"
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
