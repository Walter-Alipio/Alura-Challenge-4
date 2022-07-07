import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "./main/Main";

export default function Entry(){
  return (
    <div className="bg-[url(/src/assets/fundo/Forma1.svg),_url(/src/assets/fundo/Forma2.svg)] bg-[position:top_left,center_right]  bg-[size: contain,center]  bg-no-repeat h-screen bg-blue-logo flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}