import Button from "../../../components/Button";

export default function Register(){
  return (
    <main>
      <div className="text-center text-sm text-blue-logo w-80 mb-2">
        <p>Ainda não tem cadastro?</p>
        <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
      </div>
      <form action="#" className="flex flex-col items-center text-gray-hard gap-2">
        <label htmlFor="email" className="mt-2">E-mail</label>
        <input type="text" id="email" 
          className="h-10 rounded-md shadow-md text-center" placeholder="Escolha seu melhor email"/>

        <label htmlFor="name" className="mt-2">Nome</label>
        <input type="text" id="name" 
          className="h-10 rounded-md shadow-md text-center" placeholder="Digite seu nome completo"/>

        <label htmlFor="password" className="mt-2">Senha</label>
        <input type="password" id="password" 
          className="h-10 rounded-md shadow-md text-center" placeholder="Crie uma senha"/>

        <label htmlFor="pConfirm" className="mt-2">Confirma sua senha</label>
        <input type="password" id="pConfirm"
          className="h-10 rounded-md shadow-md text-center" placeholder="Repita a senha criada acima"/>

        <Button>Cadastrar</Button>
      </form>
    </main>
  )
}