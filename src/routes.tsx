
import Registration from "./pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Entry from "./pages/Entry/Entry";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index  element={<Entry />} />
          <Route path="register" element={<Registration />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}