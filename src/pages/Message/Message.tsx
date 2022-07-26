import Button from "../../components/Button";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface IFormInput{
  name: string,
  phone: string,
  petName: string,
  message: string,
}
 export function maskPhone(event: string ){

    return event.replace(/\D/g,'').replace(/^(\d{3})(\d{4,5})(\d{4})/g,'$1 $2-$3');
  }


export default function Message(){
  const { register, setError, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = ( data ) => console.log(data);


  return (
    <main className="h-full overflow-hidden">
      <section  className="h-full overflow-hidden pt-24 md:pt-56 lg:pt-24 flex flex-col items-center md:bg-forma2 bg-no-repeat bg-right bg-[length:134.45px_664px]">
        
        <header className="flex flex-col pt-16 items-center mx-auto md:max-w-[40.8125rem] md:mb-10">
          <p className="text-blue-logo text-center mx-16 my-3 md:text-lg">Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
        </header>

        <form 
          onSubmit={handleSubmit(onSubmit)}
         
          className="flex flex-col rounded-lg bg-gray-light mx-4 p-4 gap-4 mb-4 md:mb-16 w-[90%] max-w-[33rem]"
        >

          <label htmlFor="name" 
            className="text-blue-logo font-semibold text-base mt-2"
          >
            Nome
          </label>
          <input type="text" id="name" placeholder="Insira seu nome completo" maxLength={30}
            autoComplete={'name'}
            {...register('name', {
              required: 'Preencha seu nome.',
              maxLength: 30,
            })}
            className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium  text-gray-hard placeholder:text-sm placeholder:text-center"
          />
          <p className="text-red-600"><ErrorMessage errors={errors} name='name' /></p>

          <label htmlFor="phone"
            className="text-blue-logo font-semibold text-base mt-2"
          >
            Telefone
          </label>
          <input type="tel" inputMode="numeric"
            id="phone"  
            placeholder="Insira seu telefone e/ou whatsapp"
            autoComplete="tel-area-code"
          

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
            className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium text-gray-hard placeholder:text-sm placeholder:text-center"
          />
           <p className="text-red-600"><ErrorMessage errors={errors} name='phone' /></p>

          <label htmlFor="petName"
            className="text-blue-logo font-semibold text-base mt-2"
          >
            Nome do animal
          </label>
          <input type="text" id="petName" placeholder="Por qual animal você se interessou?"
            {...register('petName', {
              required: 'Preencha o nome do pet.',
              maxLength: 20,
            })}
            className="h-10 rounded-md shadow-md  hover:border  pl-2 placeholder:text-gray-medium text-gray-hard placeholder:text-sm placeholder:text-center" 
          />
          <p className="text-red-600"><ErrorMessage errors={errors} name='petName' /></p>

          <label htmlFor="message"
            className="text-blue-logo font-semibold text-base mt-2"
          >
            Mensagem
          </label>
          <textarea id="message" cols={30} rows={10} placeholder="Escreva sua mensagem." maxLength={250}
            className="h-40 rounded-md shadow-md hover:border pl-2 pt-2 resize-none placeholder:text-gray-medium text-gray-hard placeholder:text-sm placeholder:text-center"
            {...register('message',{
              required: 'Deixe uma mensagem para o responsável',
              maxLength: 250
            })}
          />
           <p className="text-red-600"><ErrorMessage errors={errors} name='message' /></p>
          <div className="flex justify-center">
            <Button>Enviar</Button>
          </div>
        </form>
      </section>
    </main>
  )
}