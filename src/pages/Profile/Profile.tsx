import Button from "../../components/Button";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { maskPhone } from "../Message/Message";

interface IFormInput{
  name: string,
  phone: string,
  city: string,
  message: string,
}

export default function Profile(){
  const { register, setError, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = ( data ) => console.log(data);

  return(
    <main className="h-full overflow-hidden">

      <section className="h-full pt-24 w-screen md:pt-56 lg:pt-24 flex flex-col items-center lg:h-[calc(100%-5rem)] md:bg-forma2 bg-no-repeat bg-right bg-[length:134.45px_664px]">

        <header className="flex flex-col pt-16 items-center">
            <p className="text-blue-logo text-center mx-16 my-3 ">
              Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
            </p>
        </header>

      <form onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col rounded-lg bg-gray-light m-4 p-4 pt-6 gap-4 md:mb-16 w-[90%] max-w-[33rem]">
        
        <h1 className="self-center text-xl font-semibold text-gray-hard">Pefil</h1>

        <span className="text-blue-logo font-semibold text-base mt-2"
        >
          Foto
        </span>
        <div className="flex flex-col items-center justify-center gap-3">
          {/* <button>
            <img src='' alt="Foto do perfil" className='w-24 h-24 rounded-full bg-slate-700'/>
          </button> */}
          <label htmlFor="file" 
            className="w-24 h-24 rounded-full bg-user bg-no-repeat bg-cover hover:cursor-pointer hover:shadow-coral-hover hover:shadow-md"
          >
            <input type="file" name="file" id="file"  className="hidden"/>
          </label>
          <span className="text-xs text-coral-normal">Clique na foto para editar</span>
        </div>

        <label htmlFor="name"
          className="text-blue-logo font-semibold text-base mt-2"
        >
          Nome
        </label>
        <input type="text" id="name" placeholder="Insira seu nome completo" maxLength={30}
          {...register('name',{
            required: 'Preencha seu nome.',
            maxLength: 30,
          })}
           className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium text-gray-hard placeholder:text-center"
        />
        <p className="text-red-600"><ErrorMessage errors={errors} name='name' /></p>

        <label htmlFor="phone"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Telefone
        </label>
        <input type="tel" id="phone"  placeholder="Insira seu telefone e/ou whatsapp" 
              {...register('phone',{
              required: ' Preencha seu telefone',
              onChange(event) {
                event.target.maxLength = 14;
                event.target.value = maskPhone(event.target.value)
              },
              pattern:{
                value: /^[0][0-9]{2}\s[9]?\d{4}[-]?\d{4}/g,
                message: 'Número de telefone incorreto! Ex: 011 99999 9999',
              }

            })}

           className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium text-gray-hard placeholder:text-center"
        />
        <p className="text-red-600"><ErrorMessage errors={errors} name='phone' /></p>

        <label htmlFor="city"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Cidade
        </label>
        <input type="text" id="city" placeholder="Insira cidade" 
           {...register('city',{
            required: 'Preencha o nome da sua cidade.',
            maxLength: 20,
          })}
          className="h-10 rounded-md shadow-md  hover:border  pl-2 placeholder:text-gray-medium text-gray-hard placeholder:text-center"
        />
        <p className="text-red-600"><ErrorMessage errors={errors} name='city' /></p>

        <label htmlFor="message"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Sobre
        </label>
        <textarea id="message" cols={30} rows={10} placeholder="Conte um pouco sobre você"
          className="h-40 rounded-md shadow-md hover:border pl-2 pt-2 resize-none placeholder:text-gray-medium text-gray-hard placeholder:text-center"
           maxLength={250}
        />
        <p className="text-red-600"><ErrorMessage errors={errors} name='name' /></p>

        <div className="flex justify-center">
          <Button>Salvar</Button>
        </div>
      </form>
      </section>
    </main>
  );
}