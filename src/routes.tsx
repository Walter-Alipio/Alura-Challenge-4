import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Entry from "./pages/Entry/Entry";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Entry />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}