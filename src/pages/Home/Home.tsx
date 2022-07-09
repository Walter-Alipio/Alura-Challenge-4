import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "./main/Main";
import background from '../../assets/fundo/Forma1.svg'
import Message from "./message/Message";
import Profile from "./profile/Profile";

export default function Home(){


  return (
    <div className="flex flex-col h-screen">
      <div className="relative overflow-visible h-24 mb-10 w-full">
        <img src={background} alt="" className="relative"/>
        <div className="absolute top-0 w-full">
        <Header />
      </div>
    </div>
      <Profile />
      <Footer />
    </div>
  )
}