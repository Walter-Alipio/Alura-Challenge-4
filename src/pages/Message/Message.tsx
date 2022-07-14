import Button from "../../components/Button";

export default function Message(){
  return (
    <main className="h-full overflow-scroll">
      <section  className="h-full pt-24 w-screen md:pt-56 lg:pt-24 flex flex-col items-center lg:h-full md:bg-forma2 bg-no-repeat bg-right bg-[length:134.45px_664px]">
        
        <header className="flex flex-col pt-16 items-center mx-auto md:max-w-[40.8125rem] md:mb-10">
          <p className="text-blue-logo text-center mx-16 my-3 md:text-lg">Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
        </header>

        <form 
          action="#" 
          className="flex flex-col rounded-lg bg-gray-light mx-4 p-4 gap-4 mb-4 md:mb-16 w-[90%] max-w-[33rem]"
        >

          <label htmlFor="name" 
            className="text-blue-logo font-semibold text-base mt-2"
          >
            Nome
          </label>
          <input type="text" name="" id="name" placeholder="Insira seu nome completo"
            className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium  text-gray-hard placeholder:text-sm"
          />

          <label htmlFor="phone"
            className="text-blue-logo font-semibold text-base mt-2"
          >
            Telefone
          </label>
          <input type="tel" name="" id="phone"  placeholder="Insira seu telefone e/ou whatsapp"
            className="h-10 rounded-md shadow-md  hover:border pl-2 placeholder:text-gray-medium text-gray-hard placeholder:text-sm"
          />

          <label htmlFor="petName"
            className="text-blue-logo font-semibold text-base mt-2"
          >
            Nome do animal
          </label>
          <input type="text" name="" id="petName" placeholder="Por qual animal você se interessou?"
            className="h-10 rounded-md shadow-md  hover:border  pl-2 placeholder:text-gray-medium text-gray-hard placeholder:text-sm" 
          />

          <label htmlFor="message"
            className="text-blue-logo font-semibold text-base mt-2"
          >
            Mensagem
          </label>
          <textarea name="" id="message" cols={30} rows={10} placeholder="Escreva sua mensagem."
            className="h-40 rounded-md shadow-md hover:border pl-2 resize-none placeholder:text-gray-medium text-gray-hard placeholder:text-sm"
            maxLength={250}
          />
          <div className="flex justify-center">
            <Button>Enviar</Button>
          </div>
        </form>
      </section>
    </main>
  )
}