import Button from "../../../components/Button";
import user from '../../../assets/icons/Usuario.svg';

export default function Profile(){
  return (
   <main className="flex flex-col flex-grow">
      <p className="text-blue-logo text-center mx-16 my-3 ">
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
      </p>

      <form action="#" className="flex flex-col rounded-lg bg-gray-light m-4 p-4 pt-6 gap-4">
        <h1 className="self-center text-xl font-semibold text-gray-hard">Pefil</h1>

        <label htmlFor="photo"
          className="text-blue-logo font-semibold text-base mt-2"
        >
          Foto
        </label>
        <div className="flex flex-col items-center justify-center gap-3">
          <img src={user} alt="Foto do perfil" className='w-20 h-20'/>
          <input type="file" name="" id="photo" className="hidden"/>
          <span className="text-xs text-coral-normal">Clique na foto para editar</span>
        </div>

        <label htmlFor="name"
          className="text-blue-logo font-semibold text-base mt-2"
        >
          Nome
        </label>
        <input type="text" name="" id="name" placeholder="Insira seu nome completo" maxLength={30}
           className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium text-gray-hard"
        />

        <label htmlFor="phone"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Telefone
        </label>
        <input type="tel" name="" id="phone"  placeholder="Insira seu telefone e/ou whatsapp" maxLength={30}
           className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium text-gray-hard"
        />

        <label htmlFor="petName"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Cidade
        </label>
        <input type="text" name="" id="petName" placeholder="Insira cidade" maxLength={30}
           className="h-10 rounded-md shadow-md  hover:border  pl-2 placeholder:text-gray-medium text-gray-hard"
        />

        <label htmlFor="message"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Sobre
        </label>
        <textarea name="" id="message" cols={30} rows={10} placeholder="Conte um pouco sobre você"
           className="h-40 rounded-md shadow-md hover:border pl-2 resize-none placeholder:text-gray-medium text-gray-hard"
           maxLength={250}
        />
        <div className="flex justify-center">
          <Button>Salvar</Button>
        </div>
      </form>
    </main>
  )
}