import { useState } from "react";
import Button from "../../components/Button";
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { seePassword } from "../../utils/seePassword";
import logo from '../../assets/icons/Logo-completo.png';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface IFormInput {
  email: string;
  password: string;
}

export default function Login(){
  
  const [password,setPassword] = useState<'text' | 'password'>('password');
  const [activeEyes,setActiveEyes] = useState(false);
  const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = ( data ) => console.log(data);

  return (
    <main className='h-full overflow-hidden'>

     <div className="bg-paws bg-no-repeat bg-cover w-36 h-52 absolute right-0 top-0"></div>

      <section 
        className="bg-forma2 bg-right bg-no-repeat flex flex-col h-[calc(100vh-5rem)] pt-24 md:pt-40 lg:pt-24 items-center"
      >

       <header className='mt-16 nb:mt-8'>
          <img src={logo} alt="Logo adopet" className='w-44 md:w-64 mt-4 mb-4'/>
        </header>

       <div className="text-center text-sm text-blue-logo w-80 my-6 md:text-base">
        <p>Já tem conta? Faça seu login:</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center text-gray-hard gap-2 mb-4 md:w-[21.5rem]">
        <label htmlFor="email" className="mt-2">E-mail</label>
        <input type="text" {...register('email',
          {
            required: 'Campo e-mail deve ser preenchido.',
            maxLength:20,
            pattern: {
              value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
              message: 'Formato de email inválido.',
            }
          })}
          id="email" 
        
          className="pl-2 h-10 rounded-md shadow-md placeholder:text-center hover:border bg-gray-light placeholder:text-gray-medium text-gray-hard" 
          placeholder="Escolha seu melhor email"
          />
          <p className="text-red-600"><ErrorMessage errors = { errors } name='email' /></p>
           


          <label htmlFor="password" className="mt-2">Senha</label>
        <div 
          className=" h-10 rounded-md shadow-md hover:border bg-gray-light overflow-hidden relative flex items-center focus-within:outline focus-within:outline-orange-600 focus-within:outline-2">
        
          <input type={password} id="password"
            {...register('password',
              {
                required: 'Campo senha deve ser preenchido.',
              }
              )}
            className="pl-2 h-full bg-inherit placeholder:text-center placeholder:text-gray-medium text-gray-hard" 
            placeholder="Senha"
            />
            
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
        <p className="text-red-600"><ErrorMessage errors = { errors } name='password' /></p>
         

        <Link to={''} className="text-coral-normal underline-offset-2 underline hover:no-underline text-xs">Esqueci minha senha.</Link>

        <Button>Entrar</Button>
      </form>
    </section>
   
    </main>
  )
}