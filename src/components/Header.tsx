import casa from '../assets/icons/Casa.svg'
import mensagens from "../assets/icons/Mensagens.svg";
import logo from '../assets/icons/Logo-completo-02.png';

export default function Header(){
  return (
    <header className="p-7 h-24 mb-10">
      <nav className="flex items-center gap-10 p-7">
        <img src={logo} alt="Adopet logo" className="hidden" />
        <a href="#" title="Página inicial" className="group">
          <img src={casa} alt="Página inicial"
            className='group-hover:animate-bounce hover:shadow-lg hover:shadow-black '
          />
        </a>
        <a href="#" title='Enviar mensagem' className="group">
          <img src={mensagens} alt="Enviar mensagem" 
             className='hover:animate-bounce hover:shadow-lg hover:shadow-black'
          />
        </a>
      </nav>
    </header>
  )
}