import logo from '../../../assets/icons/Logo-completo-02.png';

export default function Main(){
  return (
    <main>
      <section className='text-white flex flex-col items-center mt-4'>
        <header>
          <img src={logo} alt="Logo adopet" className='w-44 m-4'/>
        </header>
        <main className='text-center m-4'>
          <h1 className='font-semibold mb-4 text-2xl'>Boas-vinda!</h1>
          <p className='mt-4 w-60'>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
        </main>
        <nav className='flex flex-col'>
          <a href="#" 
            className='font-semibold mb-4 text-base text-center bg-coral-normal rounded-md py-3'
            title='Logar'
          >
            Já tenho conta
          </a>
          <a href="#" 
           className='font-semibold mb-4 text-base text-center bg-coral-normal rounded-md py-3 px-4'
           title='Cadastrar'
          >
            Quero me cadastrar
          </a>
        </nav>
      <div className='bg-catAndDog bg-contain bg-no-repeat w-48 h-80 mr-auto ml-16'></div>
      </section>
    </main>
  )
}