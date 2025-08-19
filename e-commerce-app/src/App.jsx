import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store } from "./lib/redux-toolkit/store";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Anlalytics";
import Invoice from "./pages/Invoice";
import Schedule from "./pages/Schedule";
import Calendar from "./pages/Calendar";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Setting from "./pages/Setting";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <div className="flex h-full gap-[30px] ">
                  <Navbar />
                  <Dashboard />
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <PrivateRoute>
                <div className="flex gap-[30px]">
                  <Navbar />
                  <Analytics />
                </div>
              </PrivateRoute>
            }
          />

          <Route
            path="/invoice"
            element={
              <PrivateRoute>
                <div className="flex gap-[30px]">
                  <Navbar />
                  <Invoice />
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/schedule"
            element={
              <PrivateRoute>
                <div className="flex gap-[30px]">
                  <Navbar />
                  <Schedule />
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute>
                <div className="flex gap-[30px]">
                  <Navbar />
                  <Calendar />
                </div>
              </PrivateRoute>
            }
          />

          <Route
            path="/messages"
            element={
              <PrivateRoute>
                <div className="flex gap-[30px]">
                  <Navbar />
                  <Messages />
                </div>
              </PrivateRoute>
            }
          />

          <Route
            path="/notification"
            element={
              <PrivateRoute>
                <div className="flex gap-[30px]">
                  <Navbar />
                  <Notification />
                </div>
              </PrivateRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <div className="flex gap-[30px]">
                  <Navbar />
                  <Setting />
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
