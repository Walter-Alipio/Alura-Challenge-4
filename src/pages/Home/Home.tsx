import Pets from './Pets'

export default function Home(){


  return (
    <main className="h-full overflow-hidden">
      
      <section 
        className="h-full pt-24 md:pt-56 lg:pt-24 flex flex-col items-center lg:bg-forma2 lg:bg-no-repeat lg:bg-right lg:bg-[length:134.45px_664px]"
      >

        <header className="flex flex-col pt-16 items-center md:mb-10 nb:pt-10">
         <p className="text-blue-logo text-center mx-16 my-3 sm:hidden">Olá! Veja os amigos disponíveis para adoção!</p>
         <p className="text-blue-logo text-center mx-16 my-3 text-lg hidden md:block">Olá!<br/> Veja os amigos disponíveis para adoção!</p>
        </header>
        <Pets />
      </section>

    </main>
  )
}