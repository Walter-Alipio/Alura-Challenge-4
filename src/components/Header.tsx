import  casa from "../assets/icons/Casa.svg";
import mensagens from "../assets/icons/Mensagens.svg";
import logo from '../assets/icons/Logo-completo-02.png';

export default function Header(){
  return (
    <header className="p-7 h-24 mb-10">
      <nav className="flex items-center gap-10 p-7">
        <img src={logo} alt="Adopet logo" className="hidden" />
        <a href="#">
          <img src={casa} alt="Tela inicial" />
        </a>
        <a href="#">
          <img src={mensagens} alt="Enviar mensagem" />
        </a>
      </nav>
    </header>
  )
}