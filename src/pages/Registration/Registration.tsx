import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "./main/Main";

export default function Registration(){
  return (
    <div className="bg-mobileRegister bg-contain bg-no-repeat h-screen">
      <Header />
      <Main />
      <Footer/>
    </div>
  )
}