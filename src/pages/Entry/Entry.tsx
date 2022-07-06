import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "./main/Main";

export default function Entry(){
  return (
    <div className="bg-mobile bg-contain bg-no-repeat h-screen bg-blue-logo">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}