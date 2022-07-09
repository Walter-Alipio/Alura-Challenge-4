import Button from "../../../components/Button";

export default function Message(){
  return (
    <main className="flex flex-col flex-grow">
      <p className="text-blue-logo text-center mx-16 my-3 ">Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
      <form action="#" className="flex flex-col rounded-lg bg-gray-light m-4 p-4 pt-6 gap-4">

        <label htmlFor="name" 
          className="text-blue-logo font-semibold text-base mt-2"
        >
          Nome
        </label>
        <input type="text" name="" id="name" placeholder="Insira seu nome completo"
           className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium text-gray-hard"
        />

        <label htmlFor="phone"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Telefone
        </label>
        <input type="tel" name="" id="phone"  placeholder="Insira seu telefone e/ou whatsapp"
           className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium text-gray-hard"
        />

        <label htmlFor="petName"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Nome do animal
        </label>
        <input type="text" name="" id="petName" placeholder="Por qual animal você se interessou?"
           className="h-10 rounded-md shadow-md  hover:border  pl-2 placeholder:text-gray-medium text-gray-hard"
        />

        <label htmlFor="message"
           className="text-blue-logo font-semibold text-base mt-2"
        >
          Mensagem
        </label>
        <textarea name="" id="message" cols={30} rows={10} placeholder="Escreva sua mensagem."
           className="h-40 rounded-md shadow-md hover:border pl-2 resize-none placeholder:text-gray-medium text-gray-hard"
           maxLength={250}
        />
        <div className="flex justify-center">
          <Button>Enviar</Button>
        </div>
      </form>
    </main>
  )
}