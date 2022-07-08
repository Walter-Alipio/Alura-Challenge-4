import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "./main/Main";

export default function Registration(){
  return (
    <div className="bg-[url(/src/assets/fundo/Forma1.svg),_url(/src/assets/fundo/Forma3.svg)] bg-[position:top_left,bottom_3.75rem_left_-1rem] bg-[length:contain,_100px_400px] bg-conta bg-no-repeat h-screen flex flex-col">
      <Header />
      <div className="bg-paws bg-no-repeat bg-cover w-36 h-52 absolute right-0 top-0"></div>
      <Main />
      <Footer/>
    </div>
  )
}