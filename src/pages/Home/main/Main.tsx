import Pets from "./Pets";

export default function Main(){
  return(
    <main className="flex flex-col items-center w-full overflow-scroll pt-2">
      <p className="text-blue-logo text-center mx-16 my-3">Olá! Veja os amigos disponíveis para adoção!</p>
      <Pets />
    </main>
  )
}