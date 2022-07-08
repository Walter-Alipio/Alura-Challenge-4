import { useState } from "react";
import Button from "../../../components/Button";
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { seePassword } from "../../../utils/seePassword";


export default function Login(){
    const [password,setPassword] = useState<'text' | 'password'>('password');
  const [activeEyes,setActiveEyes] = useState(false);
  return (
    <main>
      <div className="text-center text-sm text-blue-logo w-80 my-10">
        <p>Já tem conta? Faça seu login:</p>
      </div>
      <form action="#" className="flex flex-col items-center text-gray-hard gap-2">
        <label htmlFor="email" className="mt-2">E-mail</label>
        <input type="text" id="email" 
          className="pl-2 h-10 rounded-md shadow-md placeholder:text-center hover:border bg-gray-light" 
          placeholder="Escolha seu melhor email"/>


          <label htmlFor="password" className="mt-2">Senha</label>
        <div 
          className=" h-10 rounded-md shadow-md hover:border bg-gray-light overflow-hidden relative flex items-center focus-within:outline focus-within:outline-orange-600 focus-within:outline-2">
        
          <input type={password} id="password" maxLength={20}
            className="pl-2 h-full bg-inherit placeholder:text-center" 
            placeholder="Senha"/>
            
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

        <a href="#" className="text-coral-normal underline-offset-2 underline hover:no-underline text-xs">Esqueci minha senha.</a>

        <Button>Entrar</Button>
      </form>
    </main>
  )
}