
import Registration from "./pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Entry from "./pages/Entry/Entry";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Message from "./pages/Message/Message";
import Profile from "./pages/Profile/Profile";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index  element={<Entry />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="message" element={<Message />} />
          <Route path="perfil" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}