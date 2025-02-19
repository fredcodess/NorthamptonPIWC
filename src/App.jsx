import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Ensure you have Home, About, and other pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {" "}
      {/* Wrap with a Layout */}
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
