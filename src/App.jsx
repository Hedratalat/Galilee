import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Suspense, lazy } from "react";
import SpinnerLoading from "./Spinner/SpinnerLoading";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

// Lazy load الصفحات
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Test = lazy(() => import("./pages/test"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const Login = lazy(() => import("./pages/Login"));
const Overview = lazy(() => import("./pages/overview"));
const DashBoardLayout = lazy(() => import("./DashboardLayout/DashboardLayout"));
const AddProducts = lazy(() => import("./pages/AddProducts"));
const Products = lazy(() => import("./pages/Products"));

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<SpinnerLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/about" element={<About />} />{" "}
            <Route path="/products" element={<Products />} />{" "}
            <Route path="/contact" element={<Contact />} />{" "}
            <Route path="/signup" element={<SignUp />} />{" "}
            <Route path="/test" element={<Test />} />{" "}
            <Route path="/verify-email" element={<VerifyEmail />} />{" "}
            <Route path="/login" element={<Login />} />{" "}
            <Route
              path="/dashboard"
              element={
                // <ProtectedRoute>
                <DashBoardLayout />
                // </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="Overview" replace />} />
              <Route path="overview" element={<Overview />} />
              <Route path="addProducts" element={<AddProducts />} />
              {/* <Route
                path="productsManagement"
                element={<ProductsManagement />}
              /> */}
              {/* <Route path="userDash" element={<UserDash />} />
              <Route path="ordersDah" element={<OrdersDah />} />
              <Route path="feedback" element={<FeedbackDash />} /> */}
              {/* <Route path="message" element={<MessageDash />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
