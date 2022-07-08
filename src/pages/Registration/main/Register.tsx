import Button from "../../../components/Button";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import { seePassword } from "../../../utils/seePassword";

export default function Register(){
  const [password,setPassword] = useState<'text' | 'password'>('password');
  const [activeEyes,setActiveEyes] = useState(false);

  const [confirmePassword,setConfirmePassword] = useState<'text' | 'password'>('password');
  const [confirmeActiveEyes,setConfirmeActiveEyes] = useState(false);
  



  return (
    <main >
      <div className="text-center text-sm text-blue-logo w-80 mb-2">
        <p>Ainda não tem cadastro?</p>
        <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
      </div>
      <form action="#" className="flex flex-col items-center text-gray-hard gap-2 mb-4">
        <label htmlFor="email" className="mt-2">E-mail</label>
        <input type="text" id="email" maxLength={20}
          className="h-10 rounded-md shadow-md placeholder:text-center hover:border bg-gray-light pl-2" 
          placeholder="Escolha seu melhor email"/>

        <label htmlFor="name" className="mt-2">Nome</label>
        <input type="text" id="name" maxLength={20}
          className="h-10 rounded-md shadow-md placeholder:text-center hover:border bg-gray-light pl-2" 
          placeholder="Digite seu nome completo"/>

        <label htmlFor="password" className="mt-2">Senha</label>
        <div 
          className=" h-10 rounded-md shadow-md hover:border bg-gray-light overflow-hidden relative flex items-center focus-within:outline focus-within:outline-orange-600 focus-within:outline-2">
        
          <input type={password} id="password" maxLength={20}
            className="pl-2 h-full bg-inherit placeholder:text-center" 
            placeholder="Crie uma senha"/>
            
            <button 
              className="absolute right-2"
              onClick={event=>seePassword(
                event,
                setPassword,
                setActiveEyes,
                activeEyes
                )}
            >
              { activeEyes ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
        </div>

        <label htmlFor="pConfirm" className="mt-2">Confirma sua senha</label>
        <div 
        className=" h-10 rounded-md shadow-md hover:border bg-gray-light overflow-hidden relative flex items-center focus-within:outline focus-within:outline-orange-600 focus-within:outline-2">

          <input type={confirmePassword} id="pConfirm" maxLength={20}
            className="placeholder:text-center h-full bg-inherit pl-2" 
            placeholder="Repita a senha criada acima"/>

          <button 
              className="absolute right-2"
              onClick={event=>seePassword(
                event,
                setConfirmePassword,
                setConfirmeActiveEyes,
                confirmeActiveEyes
                )}
            >
              { confirmeActiveEyes ? <AiFillEye /> : <AiFillEyeInvisible />}
           </button>
        </div>

        <Button>Cadastrar</Button>
      </form>
    </main>
  )
}