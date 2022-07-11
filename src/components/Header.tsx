import casa from '../assets/icons/Casa.svg';
import mensagens from "../assets/icons/Mensagens.svg";
import logo from '../assets/icons/Logo-completo-02.png';
import user from '../assets/icons/Usuario.svg';



export default function Header(){

  const logged = false;

  return (
    <header className="p-7 flex items-start justify-between bg-inherit bg-forma1 bg-no-repeat overflow-visible absolute top-0 h-72 w-full">
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
      {logged ?  <button>
        <img src={user} alt="Foto do perfil" className='w-10 h-10'/>
      </button>
      : ""}
     
    </header>
  )
}