import Button from "../../../components/Button";


export default function Login(){
  return (
    <main>
      <div className="text-center text-sm text-blue-logo w-80 my-10">
        <p>Já tem conta? Faça seu login:</p>
      </div>
      <form action="#" className="flex flex-col items-center text-gray-hard gap-2">
        <label htmlFor="email" className="mt-2">E-mail</label>
        <input type="text" id="email" 
          className="h-10 rounded-md shadow-md text-center hover:border" 
          placeholder="Escolha seu melhor email"/>


        <label htmlFor="password" className="mt-2">Senha</label>
        <input type="password" id="password" 
          className="h-10 rounded-md shadow-md text-center hover:border" 
          placeholder="Crie uma senha"/>

        <a href="#" className="text-coral-normal underline-offset-2 hover:underline text-xs">Esqueci minha senha.</a>

        <Button>Entrar</Button>
      </form>
    </main>
  )
}