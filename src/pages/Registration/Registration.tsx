import Button from "../../components/Button";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { seePassword } from "../../utils/seePassword";
import logo from '../../assets/icons/Logo-completo.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';


interface IFormInput{
  email: string,
  name: string,
  password: string,
  confirmePassword: string,
}



export default function Registration(){

  const [password,setPassword] = useState<'text' | 'password'>('password');
  const [activeEyes,setActiveEyes] = useState(false);

  const [confirmePassword,setConfirmePassword] = useState<'text' | 'password'>('password');
  const [confirmeActiveEyes,setConfirmeActiveEyes] = useState(false);

  const { register, setError, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = ( data ) => {
    if(data.confirmePassword !== data.password) {
      return setError('confirmePassword', { type: 'custom', message: 'Senha incorreta.' });
    }  

    console.log(data);
  };

  return (
    <main className="h-full overflow-hidden">
    
      <div className="bg-paws bg-no-repeat bg-cover w-36 h-52 absolute right-0 top-0"></div>

      <section 
        className="bg-forma2 bg-right bg-no-repeat flex flex-col h-full overflow-hidden pt-24 md:pt-40 lg:pt-24 items-center  md:text-base md:gap-3 mb-4 ">
       <header className='mt-16 nb:mt-8'>
          <img src={logo} alt="Logo adopet" className='w-44 md:w-64 mt-4 mb-4'/>
        </header>
      <div className="text-center text-sm text-blue-logo w-80 mb-2 md:w-[32.8125rem]">
        <p>Ainda não tem cadastro?</p>
        <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col items-center text-gray-hard gap-2 md:gap-4 mb-4 md:w-[21.5rem]"
      >

        <label htmlFor="email" className="mt-2">E-mail</label>
        <input type="text" id="email" maxLength={20}
          className="h-10 rounded-md shadow-md placeholder:text-center hover:border bg-gray-light pl-2 placeholder:text-gray-medium text-gray-hard" 
          placeholder="Escolha seu melhor email"
          {...register('email',
            {
              required: 'Campo e-mail deve ser preenchido.',
              maxLength:20,
              pattern: {
                value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: 'Digite um e-mail valido.',
                }
            })}
          />
          <p className="text-red-600"><ErrorMessage errors={errors} name='email' /></p>

        <label htmlFor="name" className="mt-2">Nome</label>
        <input type="text" id="name" 
          className="h-10 rounded-md shadow-md placeholder:text-center hover:border bg-gray-light pl-2 placeholder:text-gray-medium text-gray-hard" 
          placeholder="Digite seu nome completo"
          maxLength={30}
          {...register('name',
            {
              required: 'O nome deve ser preenchido.',
              maxLength: 30
            }
          )}
          />
          <p className="text-red-600"><ErrorMessage errors={errors} name='name' /></p>

        <label htmlFor="password" className="mt-2">Senha</label>
        <div 
          className=" h-10 rounded-md shadow-md hover:border bg-gray-light overflow-hidden relative flex items-center focus-within:outline focus-within:outline-orange-600 focus-within:outline-2">
        
          <input type={password} id="password"
            className="pl-2 h-full bg-inherit placeholder:text-center" 
            placeholder="Crie uma senha"
            {...register('password',
              {
                required: 'A senha deve ter no mínimo 6 caracteres.',
                minLength:6
              }
            )}
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
        <p className="text-red-600"><ErrorMessage errors={errors} name='password' /></p>

        <label htmlFor="pConfirm" className="mt-2">Confirma sua senha</label>
        <div 
        className=" h-10 rounded-md shadow-md hover:border bg-gray-light overflow-hidden relative flex items-center focus-within:outline focus-within:outline-orange-600 focus-within:outline-2">

          <input type={confirmePassword} id="pConfirm" maxLength={20}
            className="placeholder:text-center h-full bg-inherit pl-2 placeholder:text-gray-medium text-gray-hard" 
            placeholder="Repita a senha criada acima"
            {...register('confirmePassword',
              {
                required: 'Confirme sua senha.'
              }
            )}
            />

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
        <p className="text-red-600"><ErrorMessage errors={errors} name='confirmePassword' /></p>

        <Button>Cadastrar</Button>
      </form>
    </section>
    </main>
  )
}


//https://react-hook-form.com/get-started#TypeScript
//https://react-hook-form.com/api/useformstate/errormessage/