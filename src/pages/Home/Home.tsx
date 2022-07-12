import Pets from './Pets'

export default function Home(){


  return (
    <main className="h-full overflow-hidden">
      
      <section className="h-[calc(100vh-6rem)] pt-24 overflow-scroll">
        <header className="flex flex-col pt-16 items-center">
         <p className="text-blue-logo text-center mx-16 my-3">Olá! Veja os amigos disponíveis para adoção!</p>
        </header>
        <Pets />
      </section>

    </main>
  )
}