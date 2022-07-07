import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "./main/Main";

export default function Registration(){
  return (
    <div className="bg-mobileRegister bg-contain bg-no-repeat h-screen">
      <Header />
      <div className="bg-paws bg-no-repeat bg-cover w-36 h-52 absolute right-0 top-0"></div>
      <Main />
      <Footer/>
    </div>
  )
}